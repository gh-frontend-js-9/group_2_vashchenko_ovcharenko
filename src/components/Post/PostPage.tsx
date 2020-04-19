import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom';

import {getPosts, setCurrentPost} from "../../redux/actions/getPosts";
import {bindActionCreators} from "redux";

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
import {Post} from "../../models/Post";

// Const Temp Data
import {PostResponse} from './PostCONST';
import CardImg from "../Card/CardBox/parts/CardImg/CardImg";
import CardBox from "../Card/CardBox/CardBox";
import CardContent from "../Card/CardBox/parts/СardContent/CardContent";
import CardAuthor from "../Card/CardBox/parts/CardAuthor/CardAuthor";
import CardTitle from "../Card/CardBox/parts/CardTitle/CardTitle";

class PostPage extends Component<any,Post> {
  render() {
    return (
        <section>
          <div className={'bg__white'}>
            <PostTitle items={PostResponse[0]}/>
          </div>
          {console.log(this.props.currentPost)}
          <div className={'wrapper'}>
            <PostPreview items={PostResponse[0]}/>

            <Content class={'post__content'} content={PostResponse[0].content} />

            <PostAuthor image={AvatarMask} twLink={'/'} twitter={'@JohnAMWill.'} items={PostResponse[0]}/>

            <div className={'card__header'}>
              <h2 className={'card__header--title'}>
                You might also like...
              </h2>
              <NavLink to={'/read'} className={'card__header--view'}>More</NavLink>
            </div>

            <div className='card__home-wrapper--post'>
              <CardAdaptive items={PostResponse}
                            blockClass={'card__box--main-bottom'}
                            subTitleClass={'content__subtitle--card-small'}
                            titleClass={'content__title--card'}
                            contentClass={'content__text--card'}
              />
            </div>

            <PostComment />

            <PostReplyForm />

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


// Ready for Redux
// interface State {
//   posts: Post[]
// }
//
// class PostPage extends Component<any, State> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: []
//     }
//   }
//
//
//   componentDidMount(): void {
//     this.props.getPosts()
//   }
//
//   render() {
//     console.log(this.props.posts[0]);
//     return (
//     <>
//     </>
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     posts: state.getPostsReducer.posts,
//   };
// };
//
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getPosts: bindActionCreators(getPosts, dispatch)
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
