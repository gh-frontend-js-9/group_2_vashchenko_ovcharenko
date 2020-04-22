import React from 'react';

// Component
import {Title} from "../../Shared/elements/title";
import {Content} from "../../Shared/elements/content";

// Image and style
import Blank from '../../../assets/images/BottomCard.png';

export const CardAdaptive = (props) => {

  let items = props.items;

  let renderCard = items.map((item, n: number) => {

    return (
      <div key={n} className={props.blockClass}
           style={ { backgroundImage:`url(${item.featuredImage!==null ? item.featuredImage : Blank})` } }>
  
        <Content class={props.subTitleClass}
                 content={`BY `+ item.author.firstName +` `+ item.author.lastName  +` in `+item.tags}/>
  
        <Title class={props.titleClass}
               link={'/author'}
               title={item.title}/>
  
        <Content class={props.contentClass}
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
