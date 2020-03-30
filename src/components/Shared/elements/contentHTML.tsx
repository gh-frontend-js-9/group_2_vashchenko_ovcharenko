import React from 'react';

export const ContentHTML = (props) => {
  const checkOnHtml = props.content.replace(/\s+/g,'');
  if (checkOnHtml.substr(0, 1) === "<" &&
      checkOnHtml.substr(-1, 1) === ">") {
    return <>{props.content}</>
  } else {
    return <p className={props.class}>{props.content}</p>
  }
};
