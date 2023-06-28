import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar';
import HomePage from './components/home';
import Login from './partials/login';
import Register from './partials/register';

import Footer from "./partials/Footer";

import NewPost from './partials/newPost';

// import {useEffect, useState} from "react";
import React from 'react';
import Profile from './partials/Profile';



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
                <Route path='/profile' element={<><Profile/></>}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/new-post' element={<NewPost />}/>
                {/* <HomePage /> */} 
              </Routes>
            </div>
          <Footer/>
        </div>
      </main>

  </BrowserRouter>
  )

}

export default App;
