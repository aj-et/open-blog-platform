import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/NavbarRD';
import Banner from '../components/Banner';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import NewPost from './newPost';

import {auth} from "../utils/firebase";

function Profile() {
  if (auth.currentUser){
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <NewPost></NewPost>
      <About />
      <Portfolio />
      <Contact />
    </div>
  
  )}
  else{
    return(
      <div>
        <Header />
      <Navbar />
      <h1>Thank you for visiting us, Please log in or sign up to view your profile</h1>
      
      
      <Contact />
      </div>
    )
  };
}

export default Profile;
