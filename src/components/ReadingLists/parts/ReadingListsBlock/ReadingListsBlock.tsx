import React from 'react';
import './ReadingListsBlock.scss'
function ReadingListsBlock(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default ReadingListsBlock;