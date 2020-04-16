import React from 'react';

// Components
import {Image} from "../../Shared/elements/images";
import {Content} from "../../Shared/elements/content";

// Images and style
import AvatarMask from '../../../assets/images/AvatarMask.png';

export const PostComment = (props) => {
  
  let item = props.items;
  
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
        <li>
          <div className={'post__comment--message-block'}>
            <Image image={AvatarMask}
                   class={'post__author--avatar'}
                   altText={'Opponent comments avatar'}
                   ariaLabel={'Opponent comments avatar'}/>

            <div>
              <div className={'post__comment--message-header'}>
                <h5>Brian Jackson</h5>
                <span>December 14, 2017 at 5:13 pm</span>
                <button onClick={()=> console.log('Create new Reply')}>Reply</button>
              </div>
              <div>
                <Content class={'post__comment--message-text'} content={`I think, you forgot to mention a very good one:
                Thrive architect from thrivethemes. That thing is pretty powerful.`}/>
              </div>
            </div>
          </div>

          <ul>
            <li>
              <div className={'post__comment--message-block'}>
                <Image image={AvatarMask}
                       class={'post__author--avatar'}
                       altText={'Opponent comments avatar'}
                       ariaLabel={'Opponent comments avatar'}/>

                <div>
                  <div className={'post__comment--message-header'}>
                    <h5>Sean Scott</h5>
                    <span>December 14, 2017 at 5:13 pm</span>
                  </div>
                  <div>
                    <Content class={'post__comment--message-text'} content={'Thanks Brian! We have updated the above post. You are correct, their page builder has both a free and a premium version.'}/>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>


        <li>
          <div className={'post__comment--message-block'}>
            <Image image={AvatarMask}
                   class={'post__author--avatar'}
                   altText={'Opponent comments avatar'}
                   ariaLabel={'Opponent comments avatar'}/>
            
            <div>
              <div className={'post__comment--message-header'}>
                <h5>Wiliam Hilton</h5>
                <span>December 14, 2017 at 5:13 pm</span>
                <button onClick={()=> console.log('Create new Reply')}>Reply</button>
              </div>
              <div>
                <Content class={'post__comment--message-text'} content={'I think, you forgot to mention a very good one: Thrive architect from thrivethemes. That thing is pretty powerful.'}/>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
