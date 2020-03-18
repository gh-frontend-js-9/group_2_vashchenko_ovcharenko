import React from 'react';
import './CardDescription.scss'

function CardDescription(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default CardDescription;
