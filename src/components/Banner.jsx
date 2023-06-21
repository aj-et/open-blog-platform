import React, { Component } from 'react'
import logo from '../components/images/images/maxresdefault.jpg';




class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hi! Start Blogging!</h1>
                    <p id="paragarph1"> Creator Name <br/>
                    </p>
                    
                    
            </section>
        )
    }
}

export default Banner

