import React from 'react';

// Component
import {Title} from "../../Shared/elements/title";
import {Content} from "../../Shared/elements/content";

export const Card = (props) => {
  
  let items = props.items;
  
  let renderCard = items.map((item, n: number) => {
    
    return (
      <div key={n} className={item.class} style={ { backgroundImage:`url(${item.bgImage})` } }>
        {item.subTitle && <Content class={item.subTitleClass} content={item.subTitle}/>}
        {item.title && <Title class={item.titleClass} link={item.link} title={item.title}/>}
        {item.content && <Content class={item.contentClass} content={item.content}/>}
      </div>
    );
  });
  
  return (
  <>
    {renderCard}
  </>
  );
};
