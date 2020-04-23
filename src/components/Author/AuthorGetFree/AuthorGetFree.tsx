import React, {Component} from 'react';
import './AuthorGetFree.scss'
class AuthorGetFree extends Component {
    render() {
        return (
            <div className='free-wrapper'>
                <div className='free-title'>
                    Get free web design insights...
                </div>
                <div className='free-subtitle'>
                    In your inbox, every other week. And unsubscribe in a click, if you want.
                </div>
                <input type="text" className='subscribe-input-free' placeholder='Your email'/>
                <input type="submit" value='Subscribe' className='button-free'/>
            </div>
        );
    }
}

export default AuthorGetFree;