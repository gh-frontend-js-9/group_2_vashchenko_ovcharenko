import React from 'react';


// Component
import {Title} from "../Shared/elements/title";
import {Content} from "../Shared/elements/content";
import {CardAdaptiveFC} from "../Card/CardOnGrid/CardAdaptiveFC";

// TempData
import {TopicsCard} from './TopicsCONST';

export default function Topics() {
  
  return (
  <>
    <div className={'bg__white'}>
      <div className={'post__header-box wrapper'}>
        <Title link={'/author'}
               class={'content__title--post'}
               title={'Topics'}/>
        <Content class={'content__text--card'}
                 content={'<strong>Find everything from design inspiration to best practices, freelancing<br /> tips to tools.</strong>'}/>
      </div>
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
