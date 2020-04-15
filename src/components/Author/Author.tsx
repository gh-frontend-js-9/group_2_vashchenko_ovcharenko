import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {getPosts} from "../../redux/actions/getPosts";
import {connect} from "react-redux";
import {Post} from "../../models/Post";
import BlogsWrapper from "../BlogsWrapper/BlogsWrapper";
import AuthorBlogsList from "./AuthorBlogsList/AuthorBlogsList";
import AuthorProfile from "./AuthorProfile/AuthorProfile";
import AuthorSearch from "./AuthorSearch/AuthorSearch";
import RecentPostSection from "./AuthorPost/parts/RecentPost/parts/RecentPostSection/RecentPostSection";
import PopularPostSection from "./AuthorPost/parts/PopularPost/parts/PopularPostSection/PopularPostSection";
import Subscribe from "./Subscribe/Subscribe";
import BottomSlider from "../GridIndex/BottomSlider";
import * as SliderImg from '../GridIndex/SliderCONST'
import './Author.scss'
import SliderAuthor from "../SliderImg/SliderImg";
import AuthorSlider from "./AuthorSlider/AuthorSlider";
import AuthorSocialMedia from "./AuthorSocialMedia/AuthorSocialMedia";
import AuthorCalendar from "./AuthorCalendar/AuthorCalendar";
import AuthorBanner from "./AuthorBanner/AuthorBanner";
import Paggination from "../Paggination/Paggination";
import Anime from "react-anime";
import AuthorGetFree from "./AuthorGetFree/AuthorGetFree";
import AuthorPopUp from "./AuthorPopUp/AuthorPopUp";


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


    render() {
        return (
            <BlogsWrapper className='blogs-main-wrapper'>
                <div className='author-main-wrapper'>
                    <div className='flx-drc-clm mg-right-20'>
                        <AuthorProfile/>
                        <Anime translateX={[-320,0]} duration={1000}>
                            <div className='project-list--author-wrapper'>
                                {
                                    this.props.posts.map(post => {
                                        return(
                                            <AuthorBlogsList post={post} key={post._id}/>
                                        )
                                    })
                                }
                            </div>
                        </Anime>
                        <Paggination/>
                        <AuthorGetFree/>
                    </div>
                    <div className='flx-drc-clm'>
                        <AuthorSearch/>
                        <PopularPostSection post={this.props.posts}/>
                        <RecentPostSection post={this.props.posts}/>
                        <Subscribe/>

                       {/* <AuthorSlider/>*/}
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
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: bindActionCreators(getPosts, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Author);