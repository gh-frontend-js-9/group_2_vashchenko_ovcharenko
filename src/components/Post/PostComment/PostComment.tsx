import React from 'react';

// Components
import {Image} from "../../Shared/elements/images";
import {Content} from "../../Shared/elements/content";

// Images and style
import AvatarMask from '../../../assets/images/AvatarMask.png';

export const PostComment = (props) => {
  
  let item = props.items;
  
  const RenderComments = item.map((item, n: number) =>
    <li key={n}>
      <div className={'post__comment--message-block'}>
        <Image image={item.avatar!==null ? item.avatar : AvatarMask}
               class={'post__author--avatar'}
               altText={'Avatar'+ item.name}
               ariaLabel={'Avatar '+ item.name}/>
      
        <div>
          <div className={'post__comment--message-header'}>
            <h5>{item.name}</h5>
            <span>{item.date}</span>
            <button onClick={()=> console.log('Create new Reply')}>Reply</button>
          </div>
          <div>
            <Content class={'post__comment--message-text'} content={item.content}/>
          </div>
        </div>
      </div>
      <ul>
      
      {item.reply.map((reply, n: number) =>
        <li key={n}>
          <div className={'post__comment--message-block'}>
            <Image image={reply.avatar!==null ? reply.avatar : AvatarMask}
                   class={'post__author--avatar'}
                   altText={'Avatar '+ reply.name}
                   ariaLabel={'Avatar '+ reply.name}/>
      
            <div>
              <div className={'post__comment--message-header'}>
                <h5>{reply.name}</h5>
                <span>{reply.date}</span>
              </div>
              <div>
                <Content class={'post__comment--message-text'} content={reply.content}/>
              </div>
            </div>
          </div>
        </li>
      )}
      
      </ul>
    </li>
  );
  
  return (
    <div className={'post__comment'}>
      <div className={'post__comment--info'}>
        <div className={'post__comment--info-title'}>
          <h3>Comments</h3>
          <button onClick={() => console.log('Create new Comment and Stay at HOME')}>Leave a Comment</button>
        </div>
        <p className={'post__comment--info-text'}><b>Comment policy:</b> We love comments and appreciate the time that readers spend to share ideas and give feedback. However, all comments are manually moderated and those deemed to be spam or solely promotional will be deleted.</p>
      </div>

      <ul className={'post__comment--message'}>
        {RenderComments}
      </ul>
    </div>
  );
};
