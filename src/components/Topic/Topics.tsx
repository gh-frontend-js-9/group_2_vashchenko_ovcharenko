import React from 'react';
import {NavLink} from 'react-router-dom';

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
    <div className="">
      <CardAdaptiveFC items={TopicsCard}
                      cardClass={''}
                      subTitleClass={''}
                      titleClass={''}
                      contentClass={''}
      />
    </div>
  </>
  );
}
