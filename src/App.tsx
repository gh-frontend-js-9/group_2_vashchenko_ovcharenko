import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

// Component
import Header from './components/base/Header'
import Footer from './components/base/Footer'
import MainBlogCard from "./components/MainBlogCard/MainBlogCard";
import BlogsSection from "./components/BlogsSection/BlogsSection";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        
        <main>
             <BlogsSection/>
        </main>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
