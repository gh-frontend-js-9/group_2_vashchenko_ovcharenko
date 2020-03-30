import React, {Component} from 'react';
import './MainBlogCard.scss';
import CardContent from "../CardBox/parts/СardContent/CardContent";
import CardBox from "../CardBox/CardBox";
import CardTitle from "../CardBox/parts/CardTitle/CardTitle";
import CardAuthor from "../CardBox/parts/CardAuthor/CardAuthor";
import CardDescription from "../CardBox/parts/CardDescription/CardDescription";
import API from "../../../service/apiService";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getPosts} from "../../../redux/actions/getPosts";

class MainBlogCard extends Component<any,any> {


    render() {
        let {post} = this.props;
        return (
            <CardBox className='card-wrapper'>
                <CardContent className='entire-content'>
                    <CardAuthor className='card-author'>
                        BY  TOMAS LAURINAVICIUS  IN   {post.tags}
                    </CardAuthor>
                    <CardTitle className='card-title'>
                        {post.title}
                    </CardTitle>
                    <CardDescription className='card-description'>
                        {post.description}
                    </CardDescription>
                </CardContent>
            </CardBox>
        );
    }
}


export default MainBlogCard;
