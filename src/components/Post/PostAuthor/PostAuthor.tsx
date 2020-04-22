import React from 'react';

// Components
import {Content} from "../../Shared/elements/content";
import {Image} from "../../Shared/elements/images";

// Images and style
import AvatarMask from '../../../assets/images/AvatarMask.png';

export const PostAuthor = (props) => {
  
  let item = props.items;
  
  return (
  <div className={'post__author'}>
    <Image image={props.image!==null ? props.image : AvatarMask}
           class={'post__author--avatar'}
           altText={item.author.firstName+' avatar image'}
           ariaLabel={item.author.firstName+' avatar image'}/>
    
    <Content class={'post__author--name'}
             content={item.author.firstName +` `+ item.author.lastName}/>
    
    <Content class={'post__author--follow'}
             content={<strong>Write me <a href={props.twLink!=='' ? props.twLink : `mailto:`+item.author.email}
                                     title={'Write me to my'+ props.twitter}>
                                        {props.twitter!=='' ? props.twitter : item.author.email}
                                     </a>
             </strong>}
    />
  </div>
  );
};
