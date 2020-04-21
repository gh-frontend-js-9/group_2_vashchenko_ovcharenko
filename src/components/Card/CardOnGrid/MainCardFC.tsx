import React from 'react';

// Component
import {Title} from "../../Shared/elements/title";
import {Content} from "../../Shared/elements/content";

// Images and style
import BlankCard from '../../../assets/images/PrimaryCard.png';

export const MainCardFC = (props) => {
  
  let items = props.items;
  
  let renderCard = items.map((item, n: number) => {
    
    let mainClass = (props.type !== 'reverse') ? 'card__main' : 'card__main--reverse';
    
    return (
      <div key={n}
           className={(n === 0) ? mainClass : 'card__box'}
           style={{backgroundImage:`url(${item.featuredImage !== null ? item.featuredImage : BlankCard })` }}>
        
        <Content class={(n === 0) ? 'content__subtitle': 'content__subtitle--card-small'}
                 content={(n === 0) ? `BY `+item.author.firstName +` `+ item.author.lastName  +` in `+item.tags : item.tags}/>

        {item.title &&
          <Title class={(n === 0) ? 'content__title--card' : 'content__title--card-small'}
               link={(item.link !== '' || item.link !== null) ? item.link : '/author' }
               title={item.title}/>
        }

        {item.content &&
          <Content class={(n === 0) ? 'content__text--card' : 'hidden'}
                 content={item.content}/>
        }
      </div>
    );
  });
  
  return (
  <>
    {renderCard}
  </>
  );
};
