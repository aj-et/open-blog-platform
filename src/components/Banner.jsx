import React, { Component } from 'react'
import logo from '../components/images/images/maxresdefault.jpg';
import profile1 from '../images/profileImages/pexels-brandan-saviour-2741701.jpg';



class Banner extends Component {
    render() {
        return (
            <section className="banner-container">

                    <img id="profilepic" src={profile1}alt="profile image"/>
                    
            </section>
        )
    }
}

export default Banner

