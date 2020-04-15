import React, {Component} from 'react';
import PopularPost from "./PopularPost/PopularPost";
import RecentPost from "./RecentPost/RecentPost";

class AuthorPost2 extends Component<any,any> {
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