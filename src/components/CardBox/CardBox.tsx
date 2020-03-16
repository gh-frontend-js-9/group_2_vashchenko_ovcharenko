import React from 'react';
import './CardBox.scss'

function CardBox(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default CardBox;