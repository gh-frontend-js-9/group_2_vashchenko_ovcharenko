import React, {Component} from 'react';

import {Post} from "../../../models/Post";
import {CardAdaptive} from "../../Card/CardOnGrid/CardAdaptive";

//Це можна видалити якщо ти вирішиш використовувти мій код
import './BlogsWithImage.scss'
import BlogsImageList from "../BlogsImageList/BlogsImageList";


class BlogsWithImage extends Component<any,Post> {
    render() {
        let {postWm} = this.props;
        
        
        
        return (
        <>
          <div className="card__home-wrapper--main-bottom">
            <CardAdaptive items={postWm}
                          blockClass={'card__box--main-bottom'}
                          subTitleClass={'content__subtitle--card-small'}
                          titleClass={'content__title--card'}
                          contentClass={'content__text--card'}
            />
          </div>
          
          {/*Це можна видалити якщо ти вирішиш використовувти мій код*/}
          {/*<div className='blog-display-row'>*/}
              {/*<div className='blogs-image-title'>*/}
                  {/*{*/}
                      {/*postWm.map((post:[],index:number) => {*/}
                          {/*return index > 0 ? null : <BlogsImageList post={post}/>*/}
                      {/*})*/}
                  {/*}*/}
              {/*</div>*/}
          {/*</div>*/}
          
          </>
        );
    }
}

export default BlogsWithImage;
