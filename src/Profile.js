import React from 'react';
import Header from './components/Header';
import Navbar from './components/NavbarRD';
import Banner from './components/Banner';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function Profile() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Profile;
