import React, {Component} from 'react';
import CardBox from "../../../../../../Card/CardBox/CardBox";
import CardTitle from "../../../../../../Card/CardBox/parts/CardTitle/CardTitle";
import AuthorPost from "../../../../AuthorPost";
import {Post} from "../../../../../../../models/Post";
import {HashLoader} from "react-spinners";
import {connect} from "react-redux";
import {Props} from "../../../../../../../models/Props";

class PopularPostSection extends Component<Props,Post> {
    render() {
        let {post} = this.props;
        return (
            <CardBox className='post-author-wrapper'>
                <CardTitle className='author-post__title'>
                    POPULAR POST
                </CardTitle>
                <HashLoader
                    size={150}
                    color={"#ff5480"}
                    loading={this.props.isPending}
                    css={'display:flex;justify-content:center; left:50%; transform:translateX(-50%)'}
                />
                {
                    post.map((post,index) => {
                        return(
                            <>
                                <AuthorPost post={post} key={index}/>
                            </>
                        )
                    })
                }
            </CardBox>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isPending: state.getPostsReducer.isPending
    };
};

export default connect(mapStateToProps)(PopularPostSection);