import React, {PureComponent} from 'react';
import {bindActionCreators} from "redux";
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
import AuthorSlider from "../Index/AuthorSlider";
import {HashLoader} from "react-spinners";
import {Props} from "../../models/Props";
import * as SliderImg from "../Index/SliderCONST";

import './Author.scss'


interface State {
    posts: Post[]
    currentPage: number
}

class Author extends PureComponent<Props,State> {
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
                        <HashLoader
                            size={150}
                            color={"#ff5480"}
                            loading={this.props.isPending}
                            css={'display:flex;justify-content:center; left:50%; transform:translateX(-50%)'}
                        />
                        <div className='project-list--author-wrapper'>
                                {
                                    this.props.posts.map((post,index) => {
                                        return(
                                            <AuthorBlogsList post={post} key={index}/>
                                        )
                                    })
                                }
                        </div>
                        <Paggination/>
                        <AuthorGetFree/>
                    </div>
                    <div className='wrapper-right-column'>
                        <AuthorSearch/>
                        <PopularPostSection post={this.props.posts} />
                        <RecentPostSection post={this.props.posts} />
                        <Subscribe/>
                        <div className='author-slider-display'>
                          <AuthorSlider items={SliderImg.Bottom}/>
                        </div>
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
        posts: state.getPostsReducer.posts,
        isPending: state.getPostsReducer.isPending
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: bindActionCreators(getPosts, dispatch),
        clearStore: bindActionCreators(clearStore, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Author);
