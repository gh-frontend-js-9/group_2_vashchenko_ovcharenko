import React from 'react';
import './CardImg.scss'
function CardImg(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default CardImg;