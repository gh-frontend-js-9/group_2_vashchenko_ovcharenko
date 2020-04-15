import React, {Component} from 'react';
import './AuthorSearch.scss'
import search from '../../../assets/images/search-icon.webp'
class AuthorSearch extends Component {
    render() {
        return (
            <div className='author-search__wrapper'>
                <input type="text" placeholder={'Type something…'} className='input-search'/>
                <img src={search} alt="search"/>
            </div>
        );
    }
}

export default AuthorSearch;