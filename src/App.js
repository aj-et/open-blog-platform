import './App.css';
import Login from './partials/login.js';
import Register from './partials/register.js';


import {useEffect, useState} from "react";
import React from 'react';
import PostObject from './Post';
import postData from "./posts.json"
import Footer from './Footer'


function App() {

  

  return (
 <div className="App" id="app">
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

  </div>

  );
}

export default App;
