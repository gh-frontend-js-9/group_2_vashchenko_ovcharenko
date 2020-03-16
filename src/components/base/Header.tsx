import React from 'react';
import {NavLink} from 'react-router-dom';

// Component
import {Image} from "./elements/images";
import {NavLinks} from "./elements/navLinks";

// Images and style
import logo from '../../assets/images/logo.webp';
import search from '../../assets/images/search-icon.webp';


function Header() {
  
  const logoState = {
    image: logo,
    logoClass: 'header__logo',
    altText: 'Blog header logo',
    ariaLabel: 'Blog logo by Vashchenko Ovcharenko',
  };
  
  const searchState = {
    image: search,
    altText: 'Search',
    ariaLabel: 'Search on blog'
  };
  
  return (
    <header>
      <NavLink to={'/'}>
        < Image image={logoState.image}
                class={logoState.logoClass}
                altText={logoState.altText}
                ariaLabel={logoState.ariaLabel}/>
      </NavLink>
      
      < NavLinks />
      
      <div>
        < Image image={searchState.image}
                altText={searchState.altText}
                ariaLabel={searchState.ariaLabel}/>
      </div>
      
    </header>
  );
}

export default Header;
