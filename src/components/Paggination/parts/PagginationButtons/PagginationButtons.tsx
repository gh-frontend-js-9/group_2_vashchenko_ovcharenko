import React, {Component} from 'react';
import './PagginationButtons.scss'
class PagginationButton extends Component<any,any> {
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