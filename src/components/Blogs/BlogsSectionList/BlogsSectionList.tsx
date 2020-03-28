import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getPosts} from "../../../redux/actions/getPosts";
import {Post} from "../../../models/Post";
import API from "../../../service/apiService";
import MainBlogCard from "../../Card/MainBlogCard/MainBlogCard";
import BlogsSection from "../BlogsSection/BlogsSection";
import './BlogsSectionList.scss'

interface Props {

}

interface State {
    posts: Post[]
}

class BlogsSectionList extends Component<any,State> {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }


    componentDidMount(): void {
        this.props.getPosts()
    }

    render() {
        return (
            <div className='project-list-wrapper'>
                {
                    this.props.posts.map(post => {
                        return(
                            <BlogsSection post={post} key={post._id}/>
                        )
                    })
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.getPostsReducer.posts,
    };
};


const  mapDispatchToProps = (dispatch) => {
    return {
        getPosts: bindActionCreators(getPosts, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogsSectionList);