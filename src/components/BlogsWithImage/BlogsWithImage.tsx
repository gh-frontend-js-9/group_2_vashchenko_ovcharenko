import React, {Component} from 'react';
import './BlogsWithImage.scss'
import CardImg from "../CardImg/CardImg";
import MainBlogCard from "../MainBlogCard/MainBlogCard";
import CardContent from "../СardContent/CardContent";
import CardAuthor from "../CardAuthor/CardAuthor";
import CardTitle from "../CardTitle/CardTitle";
import CardDescription from "../CardDescription/CardDescription";
import CardBox from "../CardBox/CardBox";

class BlogsWithImage extends Component {
    render() {
        return (
            <div className='blogs-image-wrapper'>
                <div className='blogs-image-title'>
                    <CardImg className='card-image'
                    />
                    <CardImg className='card-image'
                    />
                </div>
                 <div>
                     <div className='display-flex'>
                 <div>
                 <CardBox className='blur-card-title '>
                     <CardContent className='blur-card-content'>
                         <CardAuthor className='card-author-blur'>
                             BY  TOMAS LAURINAVICIUS  IN  DESIGN PROCESS
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
                     <div>
                         <CardBox className='blur-card-title '>
                             <CardContent className='blur-card-content'>
                                 <CardAuthor className='card-author-blur'>
                                     BY  TOMAS LAURINAVICIUS  IN  DESIGN PROCESS
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
            </div>
            </div>
        );
    }
}

export default BlogsWithImage;