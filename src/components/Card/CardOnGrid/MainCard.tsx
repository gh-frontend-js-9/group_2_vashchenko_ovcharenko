import React, {Component} from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux";

// Component
import {Title} from "../../Shared/elements/title";
import {Content} from "../../Shared/elements/content";
import {setCurrentPost} from "../../../redux/actions/getPosts";
import {Post} from "../../../models/Post";
import {Props} from "../../../models/Props";


class MainCard extends Component<Props,Post> {
    render () {
     let {items} = this.props;
    return ( items.map((item, n: number) =>
          <div key={n}
               className={(n === 0) ? 'card__main': 'card__box'}
               style={ { backgroundImage:`url(${item.featuredImage})` } }
               onClick={() => this.props.setCurrentPost(item)}
          >
            <Content class={(n === 0) ? 'content__subtitle': 'content__subtitle--card-small'}
                     content={(n === 0) ? `BY `+item.author.firstName +` `+ item.author.lastName  +` in `+item.tags : item.tags}/>
            
            <Title class={(n === 0) ? 'content__title--card' : 'content__title--card-small'}
                   link={'/post?'+item.slug}
                   title={item.title}/>
            
            <Content class={(n === 0) ? 'content__text--card' : 'hidden'}
                     content={item.content}/>
          </div>
        )
    )}
    }

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPost: bindActionCreators(setCurrentPost, dispatch)
  };
};

export default connect(null,mapDispatchToProps)(MainCard);
