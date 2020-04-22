import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom';
import {HashLoader} from "react-spinners";

import {getPosts} from "../../../redux/actions/getPosts";
import {Post} from "../../../models/Post";
import {CardAdaptive} from "../../Card/CardOnGrid/CardAdaptive";
import BottomSlider from "../../Index/BottomSlider";
import * as SliderImg from "../../Index/SliderCONST";
import MainCard from "../../Card/CardOnGrid/MainCard";

import './BlogsSectionList.scss'
import {Props} from "../../../models/Props";


interface State {
    posts: Post[]
}

class BlogsSectionList extends Component<Props, State> {
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
        let postItem =  this.props.posts.map(item => {
            return item[0]
        });
        postItem = postItem.slice(1)
        return (
            <>
                <div className='project-list-wrapper'>
                    <HashLoader
                        size={150}
                        color={"#ff5480"}
                        loading={this.props.isPending}
                        css={'display:flex;justify-content:center; left:50%; transform:translateX(-50%)'}
                    />
                    {
                        this.props.posts.map(post => {
                            return (
                                <>
                                    <div className={'card__header'}>
                                        <h2 className={'card__header--title'}>
                                            {post[0].category}
                                        </h2>
                                        <NavLink to={'/read'} className={'card__header--view'}>View all</NavLink>
                                    </div>

                                    <div className="card__home-wrapper--main">
                                        <MainCard items={post}/>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>


                <div className={'card__header'}>
                    <h2 className={'card__header--title'}>Reading lists</h2>
                    <NavLink to={'/read'} className={'card__header--view'}>View all</NavLink>
                </div>

                <BottomSlider items={SliderImg.Bottom}/>

                <div className='card__home-wrapper--main-bottom'>


                    <CardAdaptive items={postItem}
                                  blockClass={'card__box--main-bottom'}
                                  subTitleClass={'content__subtitle--card-small'}
                                  titleClass={'content__title--card'}
                                  contentClass={'content__text--card'}
                    />


                </div>
            </>
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
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(BlogsSectionList);
