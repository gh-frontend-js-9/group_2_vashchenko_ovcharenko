import React from 'react';
import './ReadingListsTitle.scss'

function ReadingListsTitle(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default ReadingListsTitle;
