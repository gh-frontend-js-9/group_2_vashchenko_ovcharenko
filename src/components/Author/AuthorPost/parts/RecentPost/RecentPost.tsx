import React, {Component} from 'react';
import './RecentPost.scss'
import CardTitle from "../../../../Card/CardBox/parts/CardTitle/CardTitle";
import CardDescription from "../../../../Card/CardBox/parts/CardDescription/CardDescription";
import {Post} from "../../../../../models/Post";

class RecentPost extends Component<any,Post> {
    render() {
        let {post} = this.props;
        return (
            <>
                <CardTitle className='author-post__subtitle'>
                    {post.tags}
                </CardTitle>
                <CardDescription className='author-post__description'>
                    {post.title}
                </CardDescription>
             </>
        );
    }
}

export default RecentPost;