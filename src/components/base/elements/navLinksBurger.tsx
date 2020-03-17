import React from 'react';
import {NavLink} from "react-router-dom";

export const NavLinksBurger = () => {
  const props = [
    {
      link: '/popular',
      name: 'Popular',
      class: 'menu__item'
    },
    {
      link: '/new',
      name: 'New',
      class: 'menu__item'
    },
    {
      link: '/read',
      name: 'Reading list',
      class: 'menu__item'
    },
    {
      link: '/topics',
      name: 'Topics',
      class: 'menu__item'
    },
    {
      link: '/subscribe',
      name: 'Subscribe',
      class: 'menu__item'
    }
  ];
  
  let renderNav = props.map((props, n: number) => {
    return (
    <li>
      <NavLink key={n} exac to={props.link} className={props.class}>{props.name}</NavLink>
    </li>
    );
  });
  
  return (
  <>
    {renderNav}
  </>
  );
};
