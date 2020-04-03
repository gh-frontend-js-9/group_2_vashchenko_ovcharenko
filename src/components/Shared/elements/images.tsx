import React from 'react';

export const Image = (props) => {
  
  let ImageRender = <img src={props.image} className={props.class} alt={props.altText} aria-label={props.ariaLabel}/>;
  
  if (props.items !== undefined) {
    let items = props.items;
    ImageRender = <img src={items.image} className={items.class} alt={items.altText} aria-label={items.ariaLabel}/>;
  }

  return ImageRender;
};
