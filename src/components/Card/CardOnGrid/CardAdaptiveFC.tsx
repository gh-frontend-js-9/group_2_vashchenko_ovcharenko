import React from 'react';

// Component
import {Title} from "../../Shared/elements/title";
import {Content} from "../../Shared/elements/content";

// Images and style
import BlankCard from '../../../assets/images/PrimaryCard.png';

export const CardAdaptiveFC = (props) => {
  
  let items = props.items;
  
  let renderCard = items.map((item, n: number) => {
    return (
      <div key={n}
           className={props.cardClass}
           style={{backgroundImage:`url(${item.featuredImage !== null ? item.featuredImage : BlankCard })` }}>
  
        {item.subtitle &&
        <Content class={props.subTitleClass}
                 content={item.subtitle}/>
        }
        
        {item.title &&
        <Title class={props.titleClass}
               link={(item.link !== '' || item.link !== null) ? item.link : '/author' }
               title={item.title}/>
        }
    
        {item.content &&
        <Content class={(props.contentClass !== '' || props.contentClass !== null) ? props.contentClass : 'hidden'}
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
