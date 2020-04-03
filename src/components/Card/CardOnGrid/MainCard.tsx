import React from 'react';

// Component
import {Title} from "../../Shared/elements/title";
import {Content} from "../../Shared/elements/content";

export const MainCard = (props) => {
  
  let items = props.items;
  
  let renderCard = items.map((item, n: number) => {
    return (
      <div key={n}
           className={(n === 0) ? 'card__main': 'card__box'}
           style={ { backgroundImage:`url(${item.featuredImage})` } }>
        
        <Content class={(n === 0) ? 'content__subtitle': 'content__subtitle--card-small'}
                 content={(n === 0) ? `BY `+item.author+` in `+item.tags : item.tags}/>
        
        <Title class={(n === 0) ? 'content__title--card' : 'content__title--card-small'}
               link={item.link}
               title={item.title}/>
        
        <Content class={(n === 0) ? 'content__text--card' : 'hidden'}
                 content={item.content}/>
      </div>
    );
  });
  
  return (
  <>
    {renderCard}
  </>
  );
};
