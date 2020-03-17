import React from 'react';

// Component
import {Image} from "./elements/images";
import {NavLinks} from "./elements/navLinks";
import {NavLinksBurger} from "./elements/navLinksBurger";

// Images and style
import logo from '../../assets/images/logo.webp';
import search from '../../assets/images/search-icon.webp';

function Header() {
  
  const logoState = {
    image: logo,
    logoClass: 'header__navigation--logo',
    altText: 'Blog header logo',
    ariaLabel: 'Blog logo by Vashchenko Ovcharenko',
  };
  
  const searchState = {
    image: search,
    altText: 'Search',
    class: 'header__search',
    ariaLabel: 'Search on blog'
  };
  
  return (
    <header className={'header'}>
  
      {/*Mobile Navigation*/}
      <div className="header-hamburger-menu">
        <input id="menu__toggle" type="checkbox"/>
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
    
        <ul className="menu__box">
          < NavLinksBurger />
        </ul>
      </div>
      
        {/*Navigation and logo*/}
        <nav className={'header__navigation'}>
          <a href='/'>
            < Image image={logoState.image}
                    class={logoState.logoClass}
                    altText={logoState.altText}
                    ariaLabel={logoState.ariaLabel}/>
          </a>
          < NavLinks />
        </nav>
      
      {/**/}
      <div>
        < Image image={searchState.image}
                class={searchState.class}
                altText={searchState.altText}
                ariaLabel={searchState.ariaLabel}
                onClick={()=>console.log('Open search modal window')}
        />
      </div>
    </header>
  );
}

export default Header;
