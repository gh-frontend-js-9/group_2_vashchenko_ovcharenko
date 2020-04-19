import React from 'react';

// Components
import {Content} from "../../Shared/elements/content";
import {Image} from "../../Shared/elements/images";
import {FAIconsLinks} from "../../Shared/elements/FAIconsLinks";

// Images and style
import likes from '../../../assets/images/Shape.png';
import views from '../../../assets/images/eye.png';
import {socialLink} from '../PostCONST';

export const PostPreview = (props) => {
  
  const around = (x) => {
    return(Math.round(x / 1000) +` K`)
  };
  
  return (
  <div className={'post__preview'}>
    
    <div className={'post__preview--social'}>
      <FAIconsLinks items={socialLink} class={'social__link--post'}/>
    </div>
    
    <Image class={'post__preview--image'} image={props.items.featuredImage} altText={props.items.title}/>
    
    <div className={'post__preview--rating'}>
      <Image image={likes}
             altText={'This article have '+props.items.likesCount+' likes'}/>
      <Content class={'post__preview--likes'}
               content={props.items.likesCount > 1000 ? around(props.items.likesCount) : props.items.likesCount} />
      <Image image={views}
             altText={'This article have '+props.items.viewsCount+' views'}/>
      <Content class={'post__preview--views'}
               content={props.items.viewsCount > 1000 ? around(props.items.viewsCount) : props.items.viewsCount} />
    </div>
  </div>
  );
};
