import React from 'react';
import {NavLink} from 'react-router-dom';

// Component
import {MainCardFC} from '../Card/CardOnGrid/MainCardFC';
import {CardAdaptiveFC} from "../Card/CardOnGrid/CardAdaptiveFC";

// TempData
import * as cardData from './BusinessBlogCONST';
import BottomSlider from "../Index/BottomSlider";


function BusinessBlog() {
  
  return (
  <>
    <div className="card__home-wrapper--main-bottom">
      <CardAdaptiveFC items={cardData.HeaderBB}
                      cardClass={'blog__header-card'}
                      subTitleClass={'content__subtitle'}
                      titleClass={'content__title--card'}
                      contentClass={'content__text--card'}
      />
      <CardAdaptiveFC items={cardData.HeaderNewBB}
                      cardClass={'blog__new'}
                      subTitleClass={'blog__new--view'}
                      titleClass={'blog__new--title'}
                      contentClass={''}
      />
      
    </div>
    
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Reading lists</h2>
      <NavLink to={'/author'} className={'card__header--view'}>View all</NavLink>
    </div>
  
    <BottomSlider items={cardData.SliderBB}/>
    
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Popular</h2>
      <NavLink to={'/author'} className={'card__header--view'}>View all</NavLink>
    </div>
    <div className="card__home-wrapper--main">
      <MainCardFC items={cardData.PopularBB}/>
    </div>
    
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Random</h2>
    </div>
    <div className="card__home-wrapper--random">
      <CardAdaptiveFC items={cardData.RandomBB}
                      cardClass={'card__random'}
                      subTitleClass={'content__subtitle--card-small'}
                      titleClass={'content__title--card'}
                      contentClass={'content__text--card'}
      />
    </div>
    
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Essentials</h2>
      <NavLink to={'/author'} className={'card__header--view'}>View all</NavLink>
    </div>
    <div className="card__home-wrapper--main">
      <MainCardFC items={cardData.EssentialsBB} type={'reverse'}/>
    </div>
    
    <div className="card__home-wrapper--main-bottom">
      <CardAdaptiveFC items={cardData.BottomBB}
                      cardClass={'card__box--main-bottom'}
                      subTitleClass={'content__subtitle--card-small'}
                      titleClass={'content__title--card'}
                      contentClass={'content__text--card'}
      />
    </div>
  </>
  );
}

export default BusinessBlog;
