import React from 'react';
import {NavLink} from 'react-router-dom';

// Component
import MainSlider from "./MainSlider";

// Images and style

function Home() {
  return (
    <main className={'main'}>
      <MainSlider />
    </main>
  );
}

export default Home;
