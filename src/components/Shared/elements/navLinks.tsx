import React from 'react';
import {NavLink} from "react-router-dom";

export const NavLinks = () => {
  const props = [
    {
      link: '/popular',
      name: 'Popular',
      class: 'header__navigation--link'
    },
    {
      link: '/post',
      name: 'Post',
      class: 'header__navigation--link'
    },
    {
      link: '/read',
      name: 'Reading list',
      class: 'header__navigation--link'
    },
    {
      link: '/topics',
      name: 'Topics',
      class: 'header__navigation--link'
    },
    {
      link: '/subscribe',
      name: 'Subscribe',
      class: 'header__navigation--link'
    }
  ];
  
  let renderNav = props.map((props, n: number) => {
    return (
      <NavLink key={n} to={props.link} className={props.class}>{props.name}</NavLink>
    );
  });
  
  return (
  <>
    {renderNav}
  </>
  );
};
