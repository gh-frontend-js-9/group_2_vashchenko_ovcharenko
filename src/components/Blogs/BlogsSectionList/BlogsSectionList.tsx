import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom';

import {getPosts} from "../../../redux/actions/getPosts";
import {Post} from "../../../models/Post";
import {CardAdaptive} from "../../Card/CardOnGrid/CardAdaptive";
import {MainCard} from "../../Card/CardOnGrid/MainCard";
import BottomSlider from "../../Index/BottomSlider";
import * as SliderImg from "../../Index/SliderCONST";



import './BlogsSectionList.scss'
import SimpleSlider from "../../SliderImg/SliderImg";
import BlogsSection from "../BlogsSection/BlogsSection";
import BlogsWithImage from "../BlogsWithImage/BlogsWithImage";

interface State {
  posts: Post[]
}

class BlogsSectionList extends Component<any, State> {
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
    <>
      <div className='project-list-wrapper'>
        {
          this.props.posts.map(post => {
            return (
            // Для рендера можна використовувати обидва варіанти
            
            //Мій варіант рендеру компонентів, в такому випадку нам не треба створюваати ще один компонент. Зменшить кількість компонентів в коді.
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
            
            //Цей варіант теж можна використовувати для рендеру компонентів.
            // <BlogsSection post={post} key={post._id}/>
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
        {
          this.props.posts.map((post, index:number) => {
            
            // тут можна додати будь яку обробку даних в post, я просто скопіював твою.
            return index > 0 ? null :
                               <CardAdaptive items={post}
                                             blockClass={'card__box--main-bottom'}
                                             subTitleClass={'content__subtitle--card-small'}
                                             titleClass={'content__title--card'}
                                             contentClass={'content__text--card'}
                               />
          })
        }
      </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogsSectionList);
