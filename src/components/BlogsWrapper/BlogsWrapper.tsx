import React from 'react';
import './BlogsWrapper.scss'
function BlogsWrapper(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default BlogsWrapper;