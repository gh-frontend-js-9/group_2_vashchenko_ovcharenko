import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom';
import {getPosts} from "../../redux/actions/getPosts";
import {bindActionCreators} from "redux";

// Component
import {PostTitle} from "./PostTitle";

import {CardAdaptive} from "../Card/CardOnGrid/CardAdaptive";
import {Content} from "../Shared/elements/content";
import {Image} from "../Shared/elements/images";


// Images and style
import {Post} from "../../models/Post";
import {MainCard} from "../Card/CardOnGrid/MainCard";
import SimpleSlider from "../SliderImg/SliderImg";


// Const Temp Data
import {PostResponse} from './PostCONST';
import {PostPreview} from "./PostPreview";

function PostPage() {
  console.log(PostResponse[0]);

  return (
  
  <section>
    
    <PostTitle items={PostResponse[0]}/>
    
    <PostPreview items={PostResponse[0]}/>

    <div>
      <Content content={PostResponse[0].content} />
    </div>
    
    <div>
      <div>
        <img src={PostResponse[0].featuredImage} alt={PostResponse[0].author}/>
      </div>
      <Content content={PostResponse[0].author}/>
      <Content content={'Follow me @johnAMWill'}/>
    </div>
  
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>
        You might also like...
      </h2>
      <NavLink to={'/read'} className={'card__header--view'}>More</NavLink>
    </div>
  
    <div className='card__home-wrapper--main-bottom'>
      
      <CardAdaptive items={PostResponse}
                    blockClass={'card__box--main-bottom'}
                    subTitleClass={'content__subtitle--card-small'}
                    titleClass={'content__title--card'}
                    contentClass={'content__text--card'}
      />
      
    </div>

    <div>
      <div>
        <div>
          <h3>Comments</h3>
          <button>Leave a Comment</button>
        </div>
        <p><b>Comment policy:</b> We love comments and appreciate the time that readers spend to share ideas and give feedback. However, all comments are manually moderated and those deemed to be spam or solely promotional will be deleted.</p>
      </div>
  
      <ul>

        <li>

          <div>
            <div>
              <img src={PostResponse[0].featuredImage} alt={PostResponse[0].author}/>
            </div>
            
            <div>
              <div>
                <h6><a href="#">Brian Jackson</a></h6>
                <span>December 14, 2017 at 5:13 pm</span>
                <button>Reply</button>
              </div>
              <div>
                I think, you forgot to mention a very good one:
                Thrive architect from thrivethemes. That thing is pretty powerful.
              </div>
            </div>
          </div>
          
          <ul>
            
            <li>
              <div>
                <img src={PostResponse[0].featuredImage} alt={PostResponse[0].author}/>
              </div>

              <div>
                <div>
                  <h6><a href="#">Sean Scott</a></h6>
                  <span>December 14, 2017 at 5:13 pm</span>
                </div>
                <div>
                  Thanks Brian! We have updated the above post.
                  You are correct, their page builder has both a free and a premium version.
                </div>
              </div>
            </li>
            
          </ul>
        </li>


        <li>
          <div>
            <img src={PostResponse[0].featuredImage} alt={PostResponse[0].author}/>
          </div>
  
          <div>
            <div>
              <h6><a href="#">Wiliam Hilton</a></h6>
              <span>December 14, 2017 at 5:13 pm</span>
              <button>Reply</button>
            </div>
            <div>
              I think, you forgot to mention a very good one:
              Thrive architect from thrivethemes. That thing is pretty powerful.
            </div>
          </div>
        </li>
      </ul>
    </div>
    
    <div>
      <form>
        <h3>Leave a Reply</h3>
        <label>Comment</label>
        <input type={'text'} name="comment" id="comment"></input>
        <label>Name</label>
        <input type={'text'} name="comment" id="comment"></input>
        <label>Email</label>
        <input type={'text'} name="comment" id="comment"></input>
        <label>
          <input type={'checkbox'}/>
          I agree to the <a href={'#'}>Terms and Conditions</a> and <a href={'#'}>Privacy Policy</a>
        </label>
        <button type={'submit'}>Post Comment</button>
      </form>
    </div>
  </section>
  );
}

export default PostPage;


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
