import React from 'react';
import {NavLink} from "react-router-dom";

// Component
import {Image} from "./images";

export const NavLinksFooter = (props) => {
    let items = props.items;
    
    let renderNav = items.map((item, n: number) => {
    return (
      <NavLink key={n} to={item.link} className={item.class}>
        < Image image={item.image}
                altText={item.name}
                ariaLabel={item.ariaLabel}/>
      </NavLink>
    );
  });
  
  return (
  <>
    {renderNav}
  </>
  );
};
