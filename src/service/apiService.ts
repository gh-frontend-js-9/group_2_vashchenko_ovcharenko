import axios from "axios";
import {BASE_URL, categories} from "../config/config";

class API {
    static getPosts(category,page = 1,limit = 5) {
        return  axios.get(`${BASE_URL}?category=${category}&page=${page}&limit=${limit}`)
            .then(response => {
                return {
                    posts: response.data.docs
                }
            })
    }
    static async getPostsForEveryCategories() {
        let data = [];
        for (let i = 0; i < categories.length; i++) {
            let post = (await this.getPosts(categories[i])).posts
            data.push(post)
        }
        return data
    }
}

export default API