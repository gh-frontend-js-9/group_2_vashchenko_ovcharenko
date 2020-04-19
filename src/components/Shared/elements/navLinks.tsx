import React from 'react';
import {NavLink} from "react-router-dom";

export const NavLinks = (props) => {
  
  let items = props.items;
  
  let renderNav = items.map((item, n: number) =>
    <NavLink key={n} to={item.link} className={props.class}>{item.name}</NavLink>
  );
  
  return (
  <>
    {renderNav}
  </>
  );
};
