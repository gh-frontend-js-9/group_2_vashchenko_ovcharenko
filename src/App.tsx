import React from 'react';

import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

// Component
import Header from './components/base/Header'
import Footer from './components/base/Footer'
import Home from './components/index/Home'
import New from './components/new/New'
import MainBlogCard from "./components/Card/MainBlogCard/MainBlogCard";
import BlogsSection from "./components/Blogs/BlogsSection/BlogsSection";
import BlogsWithImage from "./components/Blogs/BlogsWithImage/BlogsWithImage";

import UnderConstruction from './components/base/UnderConstruction';
import BlogsWrapper from "./components/BlogsWrapper/BlogsWrapper";
import SimpleSlider from "./components/SliderImg/SliderImg";

import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import {applyMiddleware, createStore} from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
  <Provider store={store}>
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
  </Provider>
  );
}

export default App;
