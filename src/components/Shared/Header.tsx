import React from 'react';

// Component
import {Image} from "./elements/images";
import {NavLinks} from "./elements/navLinks";
import {NavLinksBurger} from "./elements/navLinksBurger";


// Import Temp Data from CONST
import * as NavLinkItem from './NavLinkCONST';
import * as ImagesItem from './ImageCONST';


function Header() {
  
  
  return (
    <header className={'header'}>
      <div className={'header__wrapper'}>
        {/*Mobile Navigation*/}
        <div className="header-hamburger-menu">
          <input id="menu__toggle" type="checkbox"/>
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
      
          <ul className="menu__box">
            < NavLinksBurger items={NavLinkItem.main} class={'menu__item'}/>
          </ul>
        </div>
        
          {/*Navigation and logo*/}
          <nav className={'header__navigation'}>
            <a href='/'>
              < Image items={ImagesItem.logoState}/>
            </a>
            
            < NavLinks items={NavLinkItem.main} class={'header__navigation--link'}/>
          </nav>
        
        {/**/}
        <div>
          < Image items={ImagesItem.searchState}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
