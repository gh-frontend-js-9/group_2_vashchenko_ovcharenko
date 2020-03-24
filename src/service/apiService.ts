import axios from "axios";
import {BASE_URL, categories} from "../config/config";

class API {
    static getPosts(category,page = 1,limit = 10) {
        return  axios.get(`${BASE_URL}?category=${category}&page=${page}&limit=${limit}`)
            .then(response => {
                return {
                    posts: response.data.docs
                }
            })
            .catch(error => {
                console.log('registr err', error);
            })
    }
    static async getPostsForEveryCategories() {
        return categories.map(async (category) => {
            return await this.getPosts(category)
        })
    }
}

export default API