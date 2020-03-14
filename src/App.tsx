import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

// Component
import Header from './components/base/Header'
import Footer from './components/base/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        
        <main>
        
        </main>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
