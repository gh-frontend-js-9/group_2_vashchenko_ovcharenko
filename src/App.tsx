import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

// Component
import Header from './components/base/Header'
import Footer from './components/base/Footer'
import Home from './components/index/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={'/'}>
            
            <Home />
            
          </Route>
          
        </Switch>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
