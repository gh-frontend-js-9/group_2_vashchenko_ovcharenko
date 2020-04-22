import React from 'react';
import {NavLink} from 'react-router-dom';

// Component
import {CardAdaptiveFC} from "../Card/CardOnGrid/CardAdaptiveFC";
import {Content} from "../Shared/elements/content";
import {Title} from "../Shared/elements/title";

// TempData
import * as cardData from './NewCONST';


export default function New() {
  return (
  <>
    <div className={'bg__white'}>
      <div className={'post__header-box wrapper'}>
        <Title link={'/author'}
               class={'content__title--post'}
               title={'New'}/>
        <Content class={'content__text--card'}
                 content={'<strong>Our latest web design tips, tricks, insights, and resources, hot off<br /> the presses.</strong>'}/>
      </div>
    </div>
    <div className="card__home-wrapper--main-new">
      <CardAdaptiveFC items={cardData.mainNew}
                      cardClass={'card__box--main-bottom'}
                      subTitleClass={'content__subtitle--card-small'}
                      titleClass={'content__title--card'}
                      contentClass={'content__text--card'}
      />
    </div>
  </>
  );
}
