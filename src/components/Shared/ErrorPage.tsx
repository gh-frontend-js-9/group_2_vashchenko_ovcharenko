import React from 'react';

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
  <main className={'main'}>
    <Image image={item.image} altText={item.altText} ariaLabel={item.ariaLabel} class={'construction'}/>
  </main>
  );
}
