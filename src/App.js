import './App.css';

import NavBar from './components/navbar';
import HomePage from './components/home';

import Login from './partials/login.js';
import Register from './partials/register.js';


import {useEffect, useState} from "react";
import React from 'react';
import PostObject from './partials/Post';
import postData from "./data/posts.json"
import Footer from './partials/Footer'



function App() {

  

  return (

     


 <div className="App" id="app">
   <NavBar />
      <HomePage />
    <section className='forms'>
      <div className="login-form">
        {<Login></Login>}
      </div>

      <div className='register-form'>
        {<Register></Register>}
      </div>
    </section>


      {
      postData.map(post =>
        <PostObject contentJson = {post} key = {post.postID}></PostObject>)
      }
    <Footer/>
  </div>


  );
}

export default App;
