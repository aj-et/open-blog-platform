import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/NavbarRD';
import Banner from '../components/Banner';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import NewPost from './newPost';

function Profile() {
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
  );
}

export default Profile;
