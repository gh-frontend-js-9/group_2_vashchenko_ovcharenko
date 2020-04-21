import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import Anime from "react-anime";
import {connect} from "react-redux";


import {clearStore, getPosts} from "../../redux/actions/getPosts";
import {Post} from "../../models/Post";
import BlogsWrapper from "../BlogsWrapper/BlogsWrapper";
import AuthorBlogsList from "./AuthorBlogsList/AuthorBlogsList";
import AuthorProfile from "./AuthorProfile/AuthorProfile";
import AuthorSearch from "./AuthorSearch/AuthorSearch";
import RecentPostSection from "./AuthorPost/parts/RecentPost/parts/RecentPostSection/RecentPostSection";
import PopularPostSection from "./AuthorPost/parts/PopularPost/parts/PopularPostSection/PopularPostSection";
import Subscribe from "./Subscribe/Subscribe";
import AuthorSocialMedia from "./AuthorSocialMedia/AuthorSocialMedia";
import AuthorCalendar from "./AuthorCalendar/AuthorCalendar";
import AuthorBanner from "./AuthorBanner/AuthorBanner";
import Paggination from "../Paggination/Paggination";
import AuthorGetFree from "./AuthorGetFree/AuthorGetFree";
import AuthorPopUp from "./AuthorPopUp/AuthorPopUp";

import './Author.scss'

interface State {
    posts: Post[]
    currentPage: number
}

class Author extends Component<any,State> {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            currentPage:1
        }
    }

    componentDidMount(): void {
        this.props.getPosts(`${this.state.currentPage}`,1)
    }

    componentWillMount(): void {
        this.props.clearStore()
    }

    render() {
        return (
            <BlogsWrapper className='author-main-wrapper'>
                <div className='author-blogs-wrapper'>
                    <div className='wrapper-left-column'>
                        <AuthorProfile/>
                        <Anime translateX={[-320,0]} duration={1000}>
                            <div className='project-list--author-wrapper'>
                                {
                                    this.props.posts.map((post,index) => {
                                        return(
                                            <AuthorBlogsList post={post} key={index}/>
                                        )
                                    })
                                }
                            </div>
                        </Anime>
                        <Paggination/>
                        <AuthorGetFree/>
                    </div>
                    <div className='wrapper-right-column'>
                        <AuthorSearch/>
                        <PopularPostSection post={this.props.posts} />
                        <RecentPostSection post={this.props.posts}/>
                        <Subscribe/>
                        <AuthorSocialMedia/>
                        <AuthorCalendar/>
                        <AuthorBanner/>
                        <AuthorPopUp/>
                    </div>
                </div>
            </BlogsWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.getPostsReducer.posts
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: bindActionCreators(getPosts, dispatch),
        clearStore: bindActionCreators(clearStore, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Author);
