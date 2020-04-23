import React from 'react';

// Component
import {CardAdaptiveFC} from "../Card/CardOnGrid/CardAdaptiveFC";
import {Content} from "../Shared/elements/content";
import {Title} from "../Shared/elements/title";
import AuthorGetFree from "../Author/AuthorGetFree/AuthorGetFree";

// TempData
import * as cardData from './FreelanceCONST';
import FreelanceSlider from "./FreelanceSlider";

export default function Freelance() {
  return (
  <>
    <div className={'bg__white'}>
    </div>
    <div className="card__home-wrapper--main-freelance">
      <CardAdaptiveFC items={cardData.mainFreelance}
                      cardClass={''}
                      subTitleClass={'content__subtitle--card-small'}
                      titleClass={'content__title--card'}
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
    
    <div className={'insta'}>
      <Content class={'insta__stories'} content={'Insta Stories'}/>
    
     <FreelanceSlider items={cardData.instaStories}/>
    </div>
  
      </>
  );
}
