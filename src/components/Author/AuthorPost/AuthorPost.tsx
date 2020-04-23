import React, {Component} from 'react';
import './AuthorPost.scss'
import PopularPost from "./parts/PopularPost/PopularPost";
import {Post} from "../../../models/Post";
import {Props} from "../../../models/Props";

class AuthorPost extends Component<Props,Post> {
    render() {
        let {post} = this.props;
        return (
            <div>
                {
                    post.map((post,index) => {
                        return(
                               <PopularPost post={post} key={index}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default AuthorPost;
