import React, {Component} from 'react';
import CardImg from "../../Card/CardBox/parts/CardImg/CardImg";
import CardBox from "../../Card/CardBox/CardBox";
import CardContent from "../../Card/CardBox/parts/СardContent/CardContent";
import CardAuthor from "../../Card/CardBox/parts/CardAuthor/CardAuthor";
import CardTitle from "../../Card/CardBox/parts/CardTitle/CardTitle";
import CardDescription from "../../Card/CardBox/parts/CardDescription/CardDescription";
import {Post} from "../../../models/Post";

class BlogsImageList extends Component<any,Post> {
    render() {
        let {post} = this.props;
        return (
            <div>
                <CardImg>
                    <img src={post.featuredImage} alt="" className='card-image'/>
                </CardImg>
                <CardBox className='blur-card-title '>
                    <CardContent className='blur-card-content'>
                        <CardAuthor className='card-author-blur'>
                            BY  TOMAS LAURINAVICIUS  IN {post.tags}
                        </CardAuthor>
                        <CardTitle className='card-title-blur'>
                            {post.title}
                        </CardTitle>
                        <CardDescription className='card-description-blur'>
                            {post.description}
                        </CardDescription>
                    </CardContent>
                </CardBox>
            </div>
        );
    }
}

export default BlogsImageList;