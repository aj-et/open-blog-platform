import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import HomePage from './components/home';
import Login from './partials/login';
import Register from './partials/register';

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
    <BrowserRouter>
      <main id='Webpage'>

        <div className="App" id="app">
          <NavBar />
          {/* Put auth status on the right side or something */}
          {/* <AuthStatus /> */}
            <div className='home-page'>
              <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/profile' element={<>Profile</>}/>
                <Route path='/register' element={<Register />}/>
                {/* <HomePage /> */} 
              </Routes>
            </div>
          <Footer/>
        </div>
      </main>

  </BrowserRouter>

  );
}

export default App;
