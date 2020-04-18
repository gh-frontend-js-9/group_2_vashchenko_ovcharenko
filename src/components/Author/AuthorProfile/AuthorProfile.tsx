import React, {Component} from 'react';
import './AuthorProfile.scss'
import avatar from '../../../assets/images/Mask.png'
class AuthorProfile extends Component {
    render() {
        return (
            <div className='author-profile'>
                <div className='author-profile__wrapper'>
                    <div className='author-profile__avatar'>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className='author-profile__name'>
                        TOMAS LAURINAVICIUS
                    </div>
                    <div className='author-profile__description'>
                        Hi, my name is Daniel, I'm the CTO here at Kinsta.
                    </div>
                    <div className='social-profile'>
                        <i className="fab fa-vk profile-social__circle"></i>
                        <i className="fab fa-pinterest-p profile-social__circle"></i>
                        <i className="fab fa-instagram profile-social__circle"></i>
                        <i className="fab fa-twitter profile-social__circle"></i>
                        <i className="fab fa-facebook-f profile-social__circle"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorProfile;