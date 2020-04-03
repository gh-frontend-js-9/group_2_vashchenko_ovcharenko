import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";

// Component
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'
import Home from "./components/Index/Home";
import Post from './components/Post/Post'

import BlogsWrapper from "./components/BlogsWrapper/BlogsWrapper";
import ReadingLists from "./components/ReadingLists/ReadingLists";
import BusinessBlog from "./components/HomeBusinessBlog/BusinessBlog";


// Hard Code Page and services Page
import UnderConstruction from './components/Shared/UnderConstruction';
import HomeGrid from './components/GridIndex/HomeGrid';

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
            < BusinessBlog />
          </Route>
          <Route path={'/post'}>
            < Post />
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
            <Home/>
          </Route>
          
          {/*Route to HardCodePage*/}
          <Route path={'/grid-index'}>
            <HomeGrid />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  </Provider>
  );
}

export default App;
