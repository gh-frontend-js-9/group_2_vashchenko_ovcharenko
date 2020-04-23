import React from 'react';
import {Link} from "react-router-dom";
// Component
import {Image} from './elements/images';

// Images and style
import ErrorImage from '../../assets/images/404.png';


export default function ErrorPage() {
  
  const item = {
    image: ErrorImage,
    altText: 'Blog temporary page site have Error',
    ariaLabel: 'Blog temporary page site Error'
  };
  
  return (
  <section className={'wrapper'}>
    <Link to={'/home'}>
      <Image image={item.image} altText={item.altText} ariaLabel={item.ariaLabel} class={'construction'}/>
    </Link>
  </section>
  );
}
