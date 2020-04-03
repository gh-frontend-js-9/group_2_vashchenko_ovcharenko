import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

// Component
import {Title} from "../../Shared/elements/title";
import {Content} from "../../Shared/elements/content";

import API from "../../../service/apiService";
import {getPosts} from "../../../redux/actions/getPosts";

class MainCardReadyRedux extends Component<any,any> {
  
  componentDidMount(): void {
    this.props.getPosts('popular',1,10,'title,category,author')
  }
  
  render() {
    return (
      <div key={this.props.id} className={(true)?'MainCard':'SecondaryCard'} style={ { backgroundImage:`url(${this.props.featuredImage})` } }>
        <Content
        class={(true) ? 'content__subtitle' : 'content__subtitle--card-small'}
        content={(true) ? `By` + this.props.author +` in `+ this.props.category[0] + ` process`
                        : this.props.category[0]} />
        
        <Title link={this.props._id} class={(true) ? 'content__title--card' : 'content__title--card-small'} title={this.props.title} />
        
        <Content
        class={(true) ? 'content__text--card' : 'display-none'}
        content={(true) ? this.props.content : ''} />
      </div>
    );
  }
}
const  mapStateToProps = (state) => {
  return {
    posts: state.getPostsReducer.posts
  };
};

const  mapDispatchToProps = (dispatch) => {
  return {
    getPosts: bindActionCreators(getPosts, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCardReadyRedux);
