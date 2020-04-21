import axios from "axios";
import {BASE_URL, categories} from "../config/config";

class API {
    static getPosts(category,page = 1,limit = 5) {
        return  axios.get(`${BASE_URL}?category=${category}&page=${page}&limit=${limit}`)
            .then(response => {
                return {
                    posts: response.data.docs,
                    pages: response.data.totalPages
                }
            })
    }
    static async getPostsForEveryCategories(page,limit) {
        let data = [];
        let pages = 0;
        for (let i = 0; i < categories.length; i++) {
            let post = (await this.getPosts(categories[i],page,limit));
            pages = post.pages;
            data.push(post.posts)
        }
        return {
            post: data,
            pages: pages
        }
    }
}

export default API