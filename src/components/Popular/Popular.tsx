import React from 'react';
import {NavLink} from 'react-router-dom';

// Component
import {CardAdaptiveFC} from "../Card/CardOnGrid/CardAdaptiveFC";
import BottomSlider from "../Index/BottomSlider";
import {PostTitle} from "../Post/PostTitle/PostTitle";

// TempData
import {PopularCard, PopularTitle} from './PopularCONST';
import {SliderBB} from '../HomeBusinessBlog/BusinessBlogCONST';

export default function Popular() {
  
  return (
  <>
    <div className={'bg__white'}>
    <PostTitle items={PopularTitle}/>
    </div>
    <div className="card__home-wrapper--popular">
      <CardAdaptiveFC items={PopularCard}
                      cardClass={'card__random'}
                      subTitleClass={'content__subtitle--card-small'}
                      titleClass={'content__title--card'}
                      contentClass={'content__text--card'}
      />
    </div>
  
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Reading lists</h2>
      <NavLink to={'/author'} className={'card__header--view'}>View all</NavLink>
    </div>
  
    <BottomSlider items={SliderBB}/>
    
  </>
  );
}
