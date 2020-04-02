import React, {Component} from 'react';
import './BlogsWithImage.scss'
import CardImg from "../../Card/CardBox/parts/CardImg/CardImg";
import CardContent from "../../Card/CardBox/parts/СardContent/CardContent";
import CardAuthor from "../../Card/CardBox/parts/CardAuthor/CardAuthor";
import CardTitle from "../../Card/CardBox/parts/CardTitle/CardTitle";
import CardDescription from "../../Card/CardBox/parts/CardDescription/CardDescription";
import CardBox from "../../Card/CardBox/CardBox";
import {Post} from "../../../models/Post";

class BlogsWithImage extends Component<any,Post> {
    render() {
        let {img1} = this.props;
        let img = img1.map(res => res )
        return (
                <div className='blog-display-row'>
                    <div className='blogs-image-title'>
                        <CardImg>
                            <img src={img[0].featuredImage} alt="" className='card-image'/>
                        </CardImg>
                        <CardBox className='blur-card-title '>
                            <CardContent className='blur-card-content'>
                                <CardAuthor className='card-author-blur'>
                                    BY  TOMAS LAURINAVICIUS  IN  {img.title}
                                </CardAuthor>
                                <CardTitle className='card-title-blur'>
                                    How to Boost Conversions on Your WooCommerce Product Pages
                                </CardTitle>
                                <CardDescription className='card-description-blur'>
                                    User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.
                                </CardDescription>
                            </CardContent>
                        </CardBox>
                    </div>
                </div>
        );
    }
}

export default BlogsWithImage;