import React from 'react';
import {NavLink} from 'react-router-dom';

// Component
import {Title} from "../Shared/elements/title";
import {Content} from "../Shared/elements/content";
import {CardAdaptiveFC} from "../Card/CardOnGrid/CardAdaptiveFC";
import BottomSlider from "../Index/BottomSlider";

// TempData
import {PopularCard} from './PopularCONST';
import {SliderBB} from '../HomeBusinessBlog/BusinessBlogCONST';

export default function Popular() {
  
  return (
  <>
    <div className={'bg__white'}>
      <div className={'post__header-box wrapper'}>
        <Title link={'/author'}
               class={'content__title--post'}
               title={'Popular'}/>
        <Content class={'content__text--card'}
                 content={'<strong>Check out the most-read and most-shared posts from the 3layers blog.</strong>'}/>
      </div>
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
