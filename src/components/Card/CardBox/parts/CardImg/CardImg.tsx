import React from 'react';
import './CardImg.scss'
function CardImg(props) {
    return (
        <div className={props.className} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default CardImg;