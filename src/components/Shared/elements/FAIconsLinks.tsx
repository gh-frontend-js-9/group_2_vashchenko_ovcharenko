import React from 'react';
import {NavLink} from "react-router-dom";

// Component

export const FAIconsLinks = (props) => {
    let items = props.items;
    
    let renderNav = items.map((item, n: number) => {
    return (
      <NavLink key={n} to={item.link} className={props.class}>
        <i className={`fab `+ item.social}/>
      </NavLink>
    );
  });
  
  return (
  <>
    {renderNav}
  </>
  );
};
