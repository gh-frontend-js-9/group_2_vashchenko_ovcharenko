import React, {Component} from 'react';
import './AuthorPost.scss'
import AuthorBlogs from "../AuthorBlogs/AuthorBlogs";
import RecentPost from "./parts/RecentPost/RecentPost";
import CardTitle from "../../Card/CardBox/parts/CardTitle/CardTitle";
import PopularPost from "./parts/PopularPost/PopularPost";

class AuthorPost extends Component<any,any> {
    render() {
        let {post} = this.props;
        return (
            <div>
                {
                    post.map((post,index) => {
                        return(
                            <>
                                <PopularPost post={post} key={index}/>
                            </>
                        )
                    })
                }
            </div>
        );
    }
}

export default AuthorPost;
