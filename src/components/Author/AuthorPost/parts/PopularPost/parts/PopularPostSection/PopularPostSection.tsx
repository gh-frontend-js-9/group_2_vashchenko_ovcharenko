import React, {Component} from 'react';
import CardBox from "../../../../../../Card/CardBox/CardBox";
import CardTitle from "../../../../../../Card/CardBox/parts/CardTitle/CardTitle";
import AuthorPost from "../../../../AuthorPost";
import AuthorPost2 from "../../../AuthorPost2";
import {Post} from "../../../../../../../models/Post";

class PopularPostSection extends Component<any,Post> {
    render() {
        let {post} = this.props;
        return (
            <CardBox className='post-author-wrapper'>
                <CardTitle className='author-post__title'>
                    POPULAR POST
                </CardTitle>
                {
                    post.map((post,index) => {
                        return(
                            <>
                                <AuthorPost post={post} key={post._id}/>
                            </>
                        )
                    })
                }
            </CardBox>
        );
    }
}

export default PopularPostSection;