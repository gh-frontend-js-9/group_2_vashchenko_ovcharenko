import React, {Component} from 'react';

// Component
import {Title} from "../../Shared/elements/title";
import {Content} from "../../Shared/elements/content";

// Style and image

export const PostTitle = (props) => {
  
  let item = props.items;
  
  return (
    <div className={'post__header-box wrapper'}>
      <Title link={item._id} class={'content__title--post'} title={item.title}/>

      <Content
      class={'content__text--card'}
      content={item.content} />
  
      <Content
      class={'content__subtitle--post'}
      content={`By `+ item.author +` in `+ item.tags +`process`} />
    </div>);
};
