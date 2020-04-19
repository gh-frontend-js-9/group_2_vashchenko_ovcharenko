import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import MainCard from "../../Card/CardOnGrid/MainCard";

//Це можна видалити якщо ти вирішиш використовувти мій код
import './BlogsSection.scss'
import MainBlogCard from "../../Card/MainBlogCard/MainBlogCard";
import SecondBlogCard from "../../Card/SecondBlogCard/SecondBlogCard";

class BlogsSection extends Component<any,any> {
    render() {
        let {post} = this.props;
        
        // Якщо використовувати картки на грідах post 2 вже не потрібна. Можна видалити
        // let post2 = post.slice(1);
      
        return (
            <div>
              <div className={'card__header'}>
                <h2 className={'card__header--title'}>
                  {post[0].category}
                </h2>
                <NavLink to={'/read'} className={'card__header--view'}>View all</NavLink>
              </div>
  
              <div className="card__home-wrapper--main">
                <MainCard items={post}/>
              </div>
                
                {/*Це можна видалити якщо ти вирішиш використовувати мій код*/}
                {/*<div className='blog-section-wrapper'>*/}
                    {/*<div className='group-blogs'>*/}
                        {/*<div className='group-blogs-title'>*/}
                            {/*{post[0].category}*/}
                        {/*</div>*/}
                        {/*<div className='view-all'>*/}
                            {/*View all*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/**/}
                    {/*<div className='blogs-section-wrapper'>*/}
                        {/**/}
                        {/*{*/}
                            {/*<MainBlogCard post={post[0]}/>*/}
                        {/*}*/}
                        {/*<div className='second-blog-wrapper'>*/}
                            {/*<div className='flex-second'>*/}
                                {/*{*/}
                                 {/*post2.map (post => {*/}
                                  {/*return (*/}
                                   {/*<SecondBlogCard sec={post}/>*/}
                                  {/*)*/}
                                 {/*})*/}
                                {/*}*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                
            </div>

        );
    }
}

export default BlogsSection;
