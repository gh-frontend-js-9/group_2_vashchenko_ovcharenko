import React from 'react';

import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

// Component
import Header from './components/base/Header'
import Footer from './components/base/Footer'
import Home from './components/index/Home'
import New from './components/new/New'
import MainBlogCard from "./components/MainBlogCard/MainBlogCard";
import BlogsSection from "./components/BlogsSection/BlogsSection";
import BlogsWithImage from "./components/BlogsWithImage/BlogsWithImage";

import UnderConstruction from './components/base/UnderConstruction';
import BlogsWrapper from "./components/BlogsWrapper/BlogsWrapper";
import SimpleSlider from "./components/SliderImg/SliderImg";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={'/popular'}>
            < UnderConstruction />
          </Route>
          
          <Route path={'/new'}>
            < New />
          </Route>
  
          <Route path={'/read'}>
            < UnderConstruction />
          </Route>
  
          <Route path={'/read'}>
            < UnderConstruction />
          </Route>
  
          <Route path={'/topics'}>
            < UnderConstruction />
          </Route>
  
          <Route path={'/subscribe'}>
            < UnderConstruction />
          </Route>
  
          <Redirect exact from={'/'} to={'/home'} />
          <Route exact path={'/home'}>
            <Home />
            <BlogsWrapper
                className='blogs-main-wrapper'
            >
            <BlogsSection/>
            <SimpleSlider/>
            <BlogsWithImage/>
            </BlogsWrapper>
          </Route>
        </Switch>
  
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
