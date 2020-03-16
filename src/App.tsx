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
