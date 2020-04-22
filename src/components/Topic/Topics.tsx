import React from 'react';


// Component
import {CardAdaptiveFC} from "../Card/CardOnGrid/CardAdaptiveFC";
import {PostTitle} from "../Post/PostTitle/PostTitle";

// TempData
import {TopicsCard, TopicsTitle} from './TopicsCONST';

export default function Topics() {
  
  return (
  <>
    <div className={'bg__white'}>
    <PostTitle items={TopicsTitle}/>
    </div>
    <div className="card__home-wrapper--topics">
      <CardAdaptiveFC items={TopicsCard}
                      cardClass={'card__topics'}
                      subTitleClass={'card__topics--image'}
                      titleClass={'card__topics--title'}
                      contentClass={'card__topics--content'}
      />
    </div>
  </>
  );
}
