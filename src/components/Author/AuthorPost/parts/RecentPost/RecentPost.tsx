import React, {Component} from 'react';
import './RecentPost.scss'
import CardBox from "../../../../Card/CardBox/CardBox";
import CardTitle from "../../../../Card/CardBox/parts/CardTitle/CardTitle";
import {CardAdaptive} from "../../../../Card/CardOnGrid/CardAdaptive";
import CardDescription from "../../../../Card/CardBox/parts/CardDescription/CardDescription";

class RecentPost extends Component<any> {
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