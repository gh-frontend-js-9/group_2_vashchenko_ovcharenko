import React from 'react';
import {NavLink} from "react-router-dom";

// Component
import {Image} from "./images";

// Image
import vk from '../../../assets/images/vk.webp';
import printeres from '../../../assets/images/printeres.webp';
import instagram from '../../../assets/images/instagram.webp';
import twitter from '../../../assets/images/twitter.webp';
import facebook from '../../../assets/images/facebook.webp';

export const NavLinksFooter = () => {
  const props = [
    {
      link: '/',
      image: vk,
      name: 'Go to our vk',
      ariaLabel: 'Find us on vk.com',
      class: 'footer__nav'
    },
    {
      link: '/',
      image: printeres,
      name: 'Go to our printers',
      ariaLabel: 'Find us on printers',
      class: 'footer__nav'
    },
    {
      link: '/',
      image: instagram,
      name: 'Go to our instagram',
      ariaLabel: 'Find us on instagram',
      class: 'footer__nav'
    },
    {
      link: '/',
      image: twitter,
      name: 'Go to our twitter',
      ariaLabel: 'Find us on twitter',
      class: 'footer__nav'
    },
    {
      link: '/',
      image: facebook,
      name: 'Go to our facebook',
      ariaLabel: 'Find us on facebook',
      class: 'footer__nav'
    }
  ];
  
  let renderNav = props.map((props, n: number) => {
    return (
      <NavLink key={n} exac to={props.link} className={props.class}>
        < Image image={props.image}
                altText={props.name}
                ariaLabel={props.ariaLabel}/>
      </NavLink>
    );
  });
  
  return (
  <nav>
    {renderNav}
  </nav>
  );
};
