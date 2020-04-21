import React from 'react';

// Component
import {Image} from './elements/images';

export default function UnderConstruction() {
  
  const item = {
    image: 'https://www.motorsports.lk/wp-content/uploads/2018/12/thiswebpageis-under-construction.png',
    altText: 'Blog temporary page site under construction',
    ariaLabel: 'Blog temporary page site under construction Vashchenko Ovcharenko'
  };
  
  return (
  <section className={'wrapper'}>
    <Image image={item.image} altText={item.altText} ariaLabel={item.ariaLabel} class={'construction'}/>
  </section>
  );
}
