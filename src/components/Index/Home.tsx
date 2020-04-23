import React from 'react';

// Component
import MainSlider from "./MainSlider";
import BlogsWrapper from "../BlogsWrapper/BlogsWrapper";
import BlogsSectionList from "../Blogs/BlogsSectionList/BlogsSectionList";

// image and style
import * as SliderImg from '../Index/SliderCONST';
import './slider.scss';

function Home() {

  return (
  <>
    <MainSlider items={SliderImg.Main}/>
    
    <BlogsWrapper className='blogs-main-wrapper'>
      <BlogsSectionList/>
    </BlogsWrapper>
  </>
  );

}

export default Home;
