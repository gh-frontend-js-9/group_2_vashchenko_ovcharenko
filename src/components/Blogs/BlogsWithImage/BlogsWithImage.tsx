import React, {Component} from 'react';
import './BlogsWithImage.scss'

import {Post} from "../../../models/Post";
import BlogsImageList from "../BlogsImageList/BlogsImageList";

class BlogsWithImage extends Component<any,Post> {
    render() {
        let {postWm} = this.props;
        return (
                <div className='blog-display-row'>
                    <div className='blogs-image-title'>
                        {
                            postWm.map((post:[],index:number) => {
                                return index > 0 ? null : <BlogsImageList post={post}/>
                            })
                        }
                    </div>
                </div>
        );
    }
}

export default BlogsWithImage;