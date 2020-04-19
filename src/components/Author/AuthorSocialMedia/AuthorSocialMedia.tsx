import React, {Component} from 'react';
import './AuthorSocialMedia.scss'

class AuthorSocialMedia extends Component {
    render() {
        return (
            <div className='social-media'>
                <div className='social-media__title'>
                    Social Media
                </div>
                <div className='social-profile'>
                    <i className="fab fa-vk profile-social-media__circle"></i>
                    <i className="fab fa-pinterest-p profile-social-media__circle"></i>
                    <i className="fab fa-instagram profile-social-media__circle"></i>
                    <i className="fab fa-twitter profile-social-media__circle"></i>
                    <i className="fab fa-facebook-f profile-social-media__circle"></i>
                </div>
            </div>
        );
    }
}

export default AuthorSocialMedia;
