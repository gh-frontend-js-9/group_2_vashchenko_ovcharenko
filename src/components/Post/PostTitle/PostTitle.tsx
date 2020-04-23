import React from 'react';

// Component
import {Title} from "../../Shared/elements/title";
import {Content} from "../../Shared/elements/content";

export const PostTitle = (props) => {
  return (
    <div className={'post__header-box wrapper'}>
      <Title link={'/post?'+ props.items.slug}
             class={'content__title--post'}
             title={props.items.title}/>

      <Content class={'content__text--card'}
               content={props.items.description} />
  
      <Content class={'content__subtitle--post'}
               content={`By `+ props.items.author.firstName+ ` `+ props.items.author.lastName +` in `+ props.items.tags} />
    </div>);
};
