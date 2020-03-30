import React from 'react';

export const Content = (props) => {
  function createMarkup() {
    return {__html: props.content};
  }
  
  const checkOnHtml = props.content.replace(/\s+/g,'');
  if (checkOnHtml.substr(0, 1) === "<" &&
      checkOnHtml.substr(-1, 1) === ">") {
    return <div dangerouslySetInnerHTML = {createMarkup()} />
  } else {
    return <p className={props.class}>{props.content}</p>
  }
};
