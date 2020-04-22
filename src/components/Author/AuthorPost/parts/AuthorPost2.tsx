import React, {Component} from 'react';
import RecentPost from "./RecentPost/RecentPost";
import {Post} from "../../../../models/Post";
import {Props} from "../../../../models/Props";

class AuthorPost2 extends Component<Props,Post> {
    render() {
        let {post} = this.props;
        return (
            <div>
                {
                    post.map((post,index) => {
                        return(
                            <>
                                <RecentPost post={post} key={index}/>
                            </>
                        )
                    })
                }
            </div>
        );
    }
}

export default AuthorPost2;