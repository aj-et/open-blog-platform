import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/NavbarRD';
import Banner from '../components/Banner';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import NewPost from './newPost';
import '../styles/profile.css'
import PostObject from '../partials/Post';
import postData from "../data/posts.json";




// The biggest thing would be to have the account/user 
// data to populate the name, contact, posts, etc.
// But for now we have a static user and the 
// posts are for everyone, not one single user.

import {auth} from "../utils/firebase";

function Profile() {
  if (auth.currentUser){
  return (
    <div className='account-page'>
      <Header />

      <div className='account-page-content'>

        <div className='about-me'>
          <Banner />
          <About />

        </div>

        <div className='info-box'>
          <h2>Charles Randolph</h2>
          <br></br>

          <div className='add-new-post'>
            <h2>Got something inspiring to share?</h2>
            <p>Create a new post here</p>

            {/* Make it so that only the account owner can 
              add a new post */}
            <NewPost></NewPost>

          </div>
          <div className='account-contact'>
            <br></br>
            <h3>Contact Info:</h3>
            <Contact />
          </div>
          
        </div>

      </div>
      
      <hr></hr>

      <div className='account-posts'>
        <h2>Your Posts</h2>
        {  
        postData.map(post =>
            <PostObject contentJson = {post} key = {post.postID}></PostObject>)
        }
      </div>
      
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
