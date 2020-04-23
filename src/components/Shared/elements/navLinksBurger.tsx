import React from 'react';
import {NavLink} from "react-router-dom";

export const NavLinksBurger = (props) => {
  
  let items = props.items;
  
  let renderNav = items.map((item, n: number) =>
    <li  key={n}>
      <NavLink to={item.link} className={props.class}>{item.name}</NavLink>
    </li>
  );
  
  return (
  <>
    {renderNav}
  </>
  );
};
