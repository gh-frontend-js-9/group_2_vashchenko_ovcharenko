import React from 'react';

// Style and image
import './BlogsWrapper.scss'

const BlogsWrapper = (props) => <div className={props.className}>{props.children}</div>;

export default BlogsWrapper;
