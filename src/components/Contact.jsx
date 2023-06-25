import React, { Component } from 'react'

import facebook from '../images/linkImages/facebook-logo.png';
import instagram from '../images/linkImages/instagram-image.png';
import twitter from '../images/linkImages/twitter-image.png';

class Contact extends Component {
    render() {
        return (
            <section className="contact-info">

                <p>Name: Charles Randolph</p>                
                <p>Email: <a className='account-email' href="#">charlesrandolph@gmail.com</a></p>
                <p>Phone: 123-456-7890</p>

                <div className='socailmedia-links'>
                <a href="#"><img className='socialmedia' src={facebook} alt="facebook" /></a>
                <a href="#"><img className='socialmedia' src={instagram} alt="instagram" /></a>
                <a href="#"><img className='socialmedia' src={twitter} alt="twitter" /></a>
                </div>

            </section>
        )
    }
}

export default Contact