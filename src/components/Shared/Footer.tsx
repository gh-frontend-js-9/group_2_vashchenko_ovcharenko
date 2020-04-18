import React from 'react';
import {NavLink} from 'react-router-dom';

// Component
import {Image} from "./elements/images";
import {NavLinksFooter} from "./elements/navLinksFooter";

// Images and style
import logo from '../../assets/images/logo.webp';

import {footerSocialLink} from './NavLinkCONST';

function Footer() {
  
  const logoState = {
    image: logo,
    logoClass: 'footer__logo',
    altText: 'Blog footer logo',
    ariaLabel: 'Blog logo in footer',
  };
  return(
    <footer className={'footer'}>
      <div className={'footer__wrapper'}>
        <NavLink key={'100'} to={'/'}>
          < Image image={logoState.image}
                  class={logoState.logoClass}
                  altText={logoState.altText}
                  ariaLabel={logoState.ariaLabel}/>
        </NavLink>
        
        <nav className={'footer__social'}>
          <NavLinksFooter items={footerSocialLink}/>
        </nav>
    
        <div className={'footer__copywrite'}>
          <p>All Rights Reserved 2018 BehindMars</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
