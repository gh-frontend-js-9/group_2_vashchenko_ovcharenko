import React, {Component} from 'react';
import CardBox from "../../../../../../Card/CardBox/CardBox";
import CardTitle from "../../../../../../Card/CardBox/parts/CardTitle/CardTitle";
import AuthorPost2 from "../../../AuthorPost2";
import {Post} from "../../../../../../../models/Post";
import {Props} from "../../../../../../../models/Props";

class RecentPostSection extends Component<Props,Post> {
    render() {
        let {post} = this.props;
        return (
            <CardBox className='post-author-wrapper'>
                <CardTitle className='author-post__title'>
                    RECENT POST
                </CardTitle>
                {
                    post.map((post,index) => {
                        return(
                            <AuthorPost2 post={post} key={index}/>
                        )
                    })
                }
            </CardBox>
        );
    }
}

export default RecentPostSection;