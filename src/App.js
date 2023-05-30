import './App.css';

import NavBar from './components/navbar';
import HomePage from './components/home';

import Login from './partials/login.js';
import Register from './partials/register.js';
import AuthStatus from './partials/authStatus';

// import {useEffect, useState} from "react";
import React from 'react';

// import PostObject from './Post';
// import postData from "./posts.json"
// import Footer from './Footer'

// import PostObject from './partials/Post';
// import postData from "./data/posts.json"
import Footer from './partials/Footer'




function App() {

  

  return (

    
    
     
<main id='Webpage'>

  <div className="App" id="app">
    <NavBar />
      <div className='home-page'>
        <HomePage />
      </div>

      <Footer/>

    </div>
  </main>

  );
}

export default App;
