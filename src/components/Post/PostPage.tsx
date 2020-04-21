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
import Author from "../Author/Author";

// Images and style

// Const Temp Data
import {PostResponse, Comments} from './PostCONST';

class PostPage extends Component<any,any> {
    componentDidMount(): void {
        window.scrollTo(0,0)
    }
    render() {
      let serverResponse = this.props.currentPost;
        
        if (serverResponse === null) {
            return (<Author />)
        }
        
        return (
            <section>
              {console.log(serverResponse)}
                <div className={'bg__white'}>
                    <PostTitle items={serverResponse}/>
                </div>
                <div className={'wrapper'}>
                    <PostPreview items={serverResponse}/>

                    <Content class={'post__content'} content={serverResponse.content}/>

                    <PostAuthor image={serverResponse.author.imgUrl} twLink={'?link_to_twitter'} twitter={''}
                                items={serverResponse}/>

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
