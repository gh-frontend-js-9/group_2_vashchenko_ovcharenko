import React, {Component} from 'react';
import AuthorBlogs from "../AuthorBlogs/AuthorBlogs";
import {Post} from "../../../models/Post";
import {Props} from "../../../models/Props";

class AuthorBlogsList extends Component<Props,Post> {
    render() {
        let {post} = this.props;
        return (
            <div>
                {
                    post.map((post,index) => {
                        return(
                            <AuthorBlogs post={post} key={index}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default AuthorBlogsList;