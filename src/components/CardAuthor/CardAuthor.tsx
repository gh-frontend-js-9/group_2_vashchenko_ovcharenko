import React from 'react';
import './CardAuthor.scss'

function CardAuthor(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default CardAuthor;