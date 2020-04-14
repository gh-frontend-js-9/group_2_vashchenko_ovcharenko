import React, {Component} from 'react';
import CardBox from "../../Card/CardBox/CardBox";
import CardContent from "../../Card/CardBox/parts/СardContent/CardContent";
import CardAuthor from "../../Card/CardBox/parts/CardAuthor/CardAuthor";
import CardTitle from "../../Card/CardBox/parts/CardTitle/CardTitle";
import CardDescription from "../../Card/CardBox/parts/CardDescription/CardDescription";
import CardImg from "../../Card/CardBox/parts/CardImg/CardImg";
import './AuthorBlogs.scss'

class AuthorBlogs extends Component<any,any> {
    render() {
        let {post} = this.props;
        return (
            <div className='author-wrapper'>
                <CardImg className='card-image-wrap'>
                    <img src={post.featuredImage} alt="" className='card-image'/>
                </CardImg>
                <CardBox className='blur-card-title '>
                    <CardContent className='author-card-content'>
                        <CardAuthor className='card-author-author-blur'>
                            <span className='by-in'> BY </span>  TOMAS LAURINAVICIUS  <span className='by-in'> IN </span> {post.tags}
                        </CardAuthor>
                    <CardTitle className='author-title-blur'>
                        {post.title}
                    </CardTitle>
                </CardContent>
                </CardBox>
            </div>
        );
    }
}

export default AuthorBlogs;