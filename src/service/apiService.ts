import axios from "axios";

class API {
    static getPosts(category,limit,page,fields) {
        return  axios.post(`https://ghblogs.herokuapp.com/posts/?category=${category}&page=${page}&limit=${limit}&fields=${fields}`)
            .then(response => {
                return {
                    posts: response.data.docs
                }
            })
            .catch(error => {
                console.log('registr err', error);
            })
    }
}

export default API