import React from 'react';
import './СardContent.scss'

function CardContent(props) {
    return (
            <div className={props.className}>
                {props.children}
            </div>
            );
}

export default CardContent;