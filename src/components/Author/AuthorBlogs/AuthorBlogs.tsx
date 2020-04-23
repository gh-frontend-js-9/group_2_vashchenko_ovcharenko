import React, {Component} from 'react';
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";

import CardBox from "../../Card/CardBox/CardBox";
import CardContent from "../../Card/CardBox/parts/СardContent/CardContent";
import CardAuthor from "../../Card/CardBox/parts/CardAuthor/CardAuthor";
import CardTitle from "../../Card/CardBox/parts/CardTitle/CardTitle";
import CardImg from "../../Card/CardBox/parts/CardImg/CardImg";
import {Post} from "../../../models/Post";
import {setCurrentPost} from "../../../redux/actions/getPosts";

import './AuthorBlogs.scss'
import {Props} from "../../../models/Props";

class AuthorBlogs extends Component<Props,Post> {
    render() {
        let {post} = this.props;
        return (
            <div className='author-wrapper' >
                <CardImg className='card-image-wrap' >
                    <img src={post.featuredImage} alt='' className='card-image' />
                </CardImg>
                <CardBox className='blur-card-title '>
                    <CardContent className='author-card-content'>
                        <CardAuthor className='card-author-author-blur'>
                            <span className='by-in' > BY </span>  {post.author.firstName} {post.author.lastName}  <span className='by-in'> IN </span> {post.tags}
                        </CardAuthor>
                    <CardTitle className='author-title-blur'>
                        <Link to={'/post?'+post.slug} onClick={() => setCurrentPost(post)}>
                            <div onClick={() => this.props.setCurrentPost(post)} className='author-blogs-title-redirect'>
                        {post.title}
                            </div>
                        </Link>
                    </CardTitle>
                </CardContent>
                </CardBox>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPost: bindActionCreators(setCurrentPost, dispatch)
    };
};

export default connect(null,mapDispatchToProps)(AuthorBlogs);
