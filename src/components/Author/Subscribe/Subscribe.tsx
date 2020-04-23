import React, {Component} from 'react';
import './Subscribe.scss'

class Subscribe extends Component {
    render() {
        return (
            <div className='subscribe-wrapper'>
                <div className='subscribe-title'>
                    SUBSCRIBE
                </div>
                <input type="text" className='subscribe__input-block' placeholder='Your email'/>
                <input type="submit" value='Subscribe' className='subscribe-button'/>
            </div>
        );
    }
}

export default Subscribe;