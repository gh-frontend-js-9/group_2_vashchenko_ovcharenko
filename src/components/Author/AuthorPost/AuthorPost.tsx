import React, {Component} from 'react';
import './AuthorPost.scss'
import AuthorBlogs from "../AuthorBlogs/AuthorBlogs";
import RecentPost from "./parts/RecentPost/RecentPost";
import CardTitle from "../../Card/CardBox/parts/CardTitle/CardTitle";
import PopularPost from "./parts/PopularPost/PopularPost";
import {Post} from "../../../models/Post";

class AuthorPost extends Component<any,Post> {
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
