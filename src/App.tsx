import React from 'react';

import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Header from './components/base/Header'
import Footer from './components/base/Footer'
import Home from './components/index/Home'
import New from './components/new/New'

import UnderConstruction from './components/base/UnderConstruction';
import BlogsWrapper from "./components/BlogsWrapper/BlogsWrapper";

import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import {applyMiddleware, createStore} from "redux";
import { Provider } from "react-redux";
import BlogsSectionList from "./components/Blogs/BlogsSectionList/BlogsSectionList";
import ReadingLists from "./components/ReadingLists/ReadingLists";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path={'/popular'}>
            <UnderConstruction/>
          </Route>
          <Route path={'/new'}>
            <New/>
          </Route>
          <Route path={'/read'}>
            <BlogsWrapper className='reading-list-wrapper'>
            <ReadingLists/>
            </BlogsWrapper>
          </Route>
          <Route path={'/topics'}>
            <UnderConstruction/>
          </Route>
          <Route path={'/subscribe'}>
            <UnderConstruction/>
          </Route>
          <Redirect exact from={'/'} to={'/home'} />
          <Route exact path={'/home'}>
            <Home />
            <BlogsWrapper className='blogs-main-wrapper'>
            <BlogsSectionList/>
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
