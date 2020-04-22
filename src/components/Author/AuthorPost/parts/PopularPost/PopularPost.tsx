import React, {Component} from 'react';
import './PopularPost.scss'
import CardTitle from "../../../../Card/CardBox/parts/CardTitle/CardTitle";
import CardDescription from "../../../../Card/CardBox/parts/CardDescription/CardDescription";
import CardImg from "../../../../Card/CardBox/parts/CardImg/CardImg";
import {Post} from "../../../../../models/Post";
import {Props} from "../../../../../models/Props";


class PopularPost extends Component<Props,Post> {
    render() {
        let {post} = this.props;
        return (
            <>
                <div className='author-post__post-wrapper'>
                    <CardImg className='author-post__img'>
                    <img src={post.featuredImage} alt="" className='author-post__img'/>
                    </CardImg>
                    <div className='flx-drc-clm'>
                        <CardTitle className='author-post__subtitle'>
                            {post.tags}
                        </CardTitle>
                        <CardDescription className='author-post__description'>
                            {post.title}
                        </CardDescription>
                    </div>
                </div>
            </>
        );
    }
}


export default PopularPost;