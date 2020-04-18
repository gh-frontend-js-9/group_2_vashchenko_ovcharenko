import React from 'react';

// Components
import {Content} from "../../Shared/elements/content";
import {Image} from "../../Shared/elements/images";

// Images and style

export const PostAuthor = (props) => {
  
  let item = props.items;
  
  return (
  <div className={'post__author'}>
    <Image image={props.image}
           class={'post__author--avatar'}
           altText={item.author+' avatar image'}
           ariaLabel={item.author+' avatar image'}/>
    
    <Content class={'post__author--name'}
             content={item.author}/>
    
    <Content class={'post__author--follow'}
             content={<p>Follow me <a href={props.twLink} title={'Follow the my Twitter'+ props.twitter}>{props.twitter}</a></p>}/>
  </div>
  );
};
