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
import PostPage from './components/Post/PostPage'

import BlogsWrapper from "./components/BlogsWrapper/BlogsWrapper";
import ReadingLists from "./components/ReadingLists/ReadingLists";
import BusinessBlog from "./components/HomeBusinessBlog/BusinessBlog";


// Hard Code Page and services Page
import UnderConstruction from './components/Shared/UnderConstruction';
import Author from "./components/Author/Author";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <Header/>
        
        <main className={'main'}>
          <Switch>
            <Route path={'/popular'}>
              <UnderConstruction/>
            </Route>
            <Route path={'/new'}>
            {/*  < BusinessBlog />*/}
            <Author/>
            </Route>
            <Route path={'/post'}>
              < PostPage />
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
            <Route path={'/blog'}>
              <BusinessBlog/>
            </Route>
            <Redirect exact from={'/'} to={'/home'} />
            <Route exact path={'/home'}>
              <Home/>
            </Route>
          </Switch>
        </main>
        
        <Footer/>
      </BrowserRouter>
    </div>
  </Provider>
  );
}

export default App;
