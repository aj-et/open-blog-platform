import './App.css';

// import NavBar from './components/Navbar';
// import HomePage from './components/Home';

import Login from './partials/login.js';
import Register from './partials/register.js';


import {useEffect, useState} from "react";
import React from 'react';
import PostObject from './Post';
import postData from "./posts.json"
import Footer from './Footer'

import Header from './components/Header'
import Navbar from './components/NavbarRD'
import Banner from './components/Banner'
import About from './components/About'
// import Project from './components/Project'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'



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

      <Header />
      <hr />
      <Navbar />
      <br />
      <Banner /> 
      <br />
      <About />
      <br />
      <hr />
      <h1 className="skillheader">My SKills</h1>
      <hr />
      {/* <Project /> */}
      <hr />
      <Portfolio />
      <hr />
      <h1 id="contactnav" className="contact">Contact Information</h1>
      <hr />
      <Contact />


  </div>

  
  );
}

export default App;
