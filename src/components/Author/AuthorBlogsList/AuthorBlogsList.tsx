import React, {Component} from 'react';
import AuthorBlogs from "../AuthorBlogs/AuthorBlogs";

class AuthorBlogsList extends Component<any,any> {
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