import React from 'react';
import {Content} from "../Shared/elements/content";
import {Image} from "../Shared/elements/images";
import {NavLinksFooter} from "../Shared/elements/navLinksFooter";

import likes from '../../assets/images/Shape.png';
import views from '../../assets/images/eye.png';
import {socialLink} from './PostCONST';

export const PostPreview = (props) => {
  
  let item = props.items;
  
  const around = (x) => {
    return(Math.round(x / 1000) +` K`)
  };
  
  return (
  <div className={'post__preview'}>
    <div>
      <NavLinksFooter items={socialLink}/>
    </div>
    
    <Image image={item.featuredImage} altText={item.title}/>
    
    <div>
      <Image image={likes} altText={'This article have '+item.likesCount+' likes'}/>
      <Content class={'post__preview--likes'} content={item.likesCount > 1000 ? around(item.likesCount) : item.likesCount} />
      <Image image={views} altText={'This article have '+item.likesCount+' views'}/>
      <Content class={'post__preview--views'} content={item.viewsCount > 1000 ? around(item.viewsCount) : item.viewsCount} />
    </div>
  </div>
  );
};
