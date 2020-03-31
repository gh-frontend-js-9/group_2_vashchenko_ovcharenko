import React from 'react';
import './CardTitle.scss'

function CardTitle(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default CardTitle;
