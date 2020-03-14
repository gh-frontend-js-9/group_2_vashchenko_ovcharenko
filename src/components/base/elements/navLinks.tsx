import React from 'react';
import {NavLink} from "react-router-dom";

export const NavLinks = () => {
  const props = [
    {
      link: '/',
      name: 'Home',
      class: 'header__nav'
    },
    {
      link: '/popular',
      name: 'Popular',
      class: 'header__nav'
    },
    {
      link: '/new',
      name: 'New',
      class: 'header__nav'
    },
    {
      link: '/read',
      name: 'Reading list',
      class: 'header__nav'
    },
    {
      link: '/topics',
      name: 'Topics',
      class: 'header__nav'
    },
    {
      link: '/subscribe',
      name: 'Subscribe',
      class: 'header__nav'
    }
  ];
  
  let renderNav = props.map((props, n: number) => {
    return (
      <NavLink key={n} exac to={props.link} className={props.class}>{props.name}</NavLink>
    );
  });
  
  return (
  <nav>
    {renderNav}
  </nav>
  );
};
