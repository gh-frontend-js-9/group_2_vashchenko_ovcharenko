import React from 'react';


// Component
import MainSlider from "./MainSlider";
import BlogsWrapper from "../BlogsWrapper/BlogsWrapper";
import BlogsSectionList from "../Blogs/BlogsSectionList/BlogsSectionList";



function Home() {

  return (
  <main className={'main'}>
    
    <MainSlider />
    
    <BlogsWrapper className='blogs-main-wrapper'>
      <BlogsSectionList/>
    </BlogsWrapper>
  </main>
  );

}

export default Home;
