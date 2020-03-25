import React from 'react';

// Component
import {Image} from "./elements/images";

// Images and style


function UnderConstruction() {
  
  const state = {
    image: 'https://pngimg.com/uploads/under_construction/under_construction_PNG66.png',
    altText: 'Blog temporary page site under construction',
    ariaLabel: 'Blog temporary page site under construction Vashchenko Ovcharenko',
    class: 'construction'
  };
  
  return (
  <main className={'main'}>
    <Image image={state.image} altText={state.altText} ariaLabel={state.ariaLabel} class={state.class}/>
  </main>
  );
}

export default UnderConstruction;
