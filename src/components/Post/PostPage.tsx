import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom';
// Component
import {CardAdaptive} from "../Card/CardOnGrid/CardAdaptive";
import {Content} from "../Shared/elements/content";

import {PostTitle} from "./PostTitle/PostTitle";
import {PostPreview} from "./PostPreview/PostPreview";
import {PostAuthor} from "./PostAuthor/PostAuthor";
import {PostComment} from "./PostComment/PostComment";
import {PostReplyForm} from "./PostReplyForm/PostReplyForm";

// Images and style
import AvatarMask from '../../assets/images/AvatarMask.png';

// Const Temp Data
import {PostResponse, Comments} from './PostCONST';

class PostPage extends Component<any,any> {
    render() {
        return (
            <section>
                <div className={'bg__white'}>
                    <PostTitle items={PostResponse[0]}/>
                </div>
                {console.log(this.props.currentPost)}
                <div className={'wrapper'}>
                    <PostPreview items={PostResponse[0]}/>

                    <Content class={'post__content'} content={PostResponse[0].content}/>

                    <PostAuthor image={AvatarMask} twLink={'?link_to_twitter'} twitter={'@JohnAMWill.'}
                                items={PostResponse[0]}/>

                    <div className={'card__header'}>
                        <h2 className={'card__header--title'}>
                            You might also like...
                        </h2>
                        <NavLink to={'/home'} className={'card__header--view'}>More</NavLink>
                    </div>

                    <div className='card__home-wrapper--post'>
                        <CardAdaptive items={PostResponse}
                                      blockClass={'card__box--main-bottom'}
                                      subTitleClass={'content__subtitle--card-small'}
                                      titleClass={'content__title--card'}
                                      contentClass={'content__text--card'}
                        />
                    </div>

                    <PostComment items={Comments}/>
                    <PostReplyForm/>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentPost: state.getPostsReducer.currentPost,
    };
};

export default connect(mapStateToProps)(PostPage);
