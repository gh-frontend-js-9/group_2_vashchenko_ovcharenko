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
import Author from "./components/Author/Author";
import ReadingLists from "./components/ReadingLists/ReadingLists";
import BusinessBlog from "./components/HomeBusinessBlog/BusinessBlog";
import Popular from "./components/Popular/Popular";
import Topics from "./components/Topic/Topics";
import New from "./components/New/New";
import Personal from "./components/Personal/Personal";

// Services Page
import ScrollToTop from "./components/Shared/ScrollToTop";
import UnderConstruction from './components/Shared/UnderConstruction';
import ErrorPage from "./components/Shared/ErrorPage";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header/>

        <main className={'main'}>
          <Switch>
            <Route path={'/author'} component={Author}/>
            <Route path={'/blog'} component={BusinessBlog}/>
            <Route path={'/popular'} component={Popular}/>
            <Route path={'/new'} component={New}/>
            <Route path={'/personal'} component={Personal}/>
            <Route path={'/post'} component={PostPage}/>
            <Route path={'/topics'} component={Topics}/>
            <Route path={'/subscribe'} component={UnderConstruction}/>
            <Route path={'/error'} component={ErrorPage}/>
  
            
            <Route path={'/read'} >
                <ReadingLists/>
            </Route>
  
            <Redirect exact from={'/'} to={'/home'} />
            <Route path={'/home'} exact>
              <Home />
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
