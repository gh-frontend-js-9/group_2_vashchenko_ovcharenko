import React from 'react';

// Component
import {CardAdaptiveFC} from "../Card/CardOnGrid/CardAdaptiveFC";
import AuthorGetFree from "../Author/AuthorGetFree/AuthorGetFree";

// TempData
import * as cardData from './PersonalCONST';

export default function Personal() {
  return (
  <>
    <div className="card__home-wrapper--main-personal">
      <CardAdaptiveFC items={cardData.mainNew}
                      cardClass={'card__box--personal'}
                      subTitleClass={'content__subtitle--card-small'}
                      titleClass={'content__title--card'}
                      contentClass={'content__text--card'}
      />
    </div>
    
    <div className={'align__center'}>
      <button type={'button'}
              className={'btn__load-more'}
              title={'Load More'}
              onClick={() => console.log('Load more publication')}>
              Load More
      </button>
    </div>
    
    <AuthorGetFree/>
  </>
  );
}
