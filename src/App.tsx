import React from 'react';

import {BrowserRouter, Route, Switch} from "react-router-dom";

// Component
import Header from './components/base/Header'
import Footer from './components/base/Footer'
import Home from './components/index/Home'
import MainBlogCard from "./components/MainBlogCard/MainBlogCard";
import BlogsSection from "./components/BlogsSection/BlogsSection";
import BlogsWithImage from "./components/BlogsWithImage/BlogsWithImage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={'/popular'}>
            <p>Popular page</p>
          </Route>
          
          <Route path={'/new'}>
            <p>New blog page</p>
          </Route>
          
          <Route path={'/read'}>
            <p>Read blog page</p>
          </Route>
          
          <Route path={'/read'}>
            <p>Reading list blog page</p>
          </Route>
          
          <Route path={'/topics'}>
            <p>Topics blog page</p>
          </Route>
          
          <Route path={'/subscribe'}>
            <p>Subscribe blog page</p>
          </Route>
          
          <Route exact path={'/'}>
            <Home />
            <BlogsSection />
            <BlogsWithImage/>
             {/*<BlogsSection/>*/}
          </Route>
        </Switch>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
