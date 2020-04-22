import React, {Component} from 'react';
import './PagginationButtons.scss'
import {Post} from "../../../../models/Post";
import {Props} from "../../../../models/Props";

class PagginationButton extends Component<Props,Post> {
    render() {
        let {value, handler} = this.props;
        return (
            <div onClick={handler} className='pag-num'>
                {'0' + value}
            </div>
        );
    }
}

export default PagginationButton;