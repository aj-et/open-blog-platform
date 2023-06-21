import React, { Component } from 'react'

import pyimg from '../components/images/images/pythonimg.png'
import jsimg from '../components/imagesimages/javascriptimg2.png'
import htmlimg from '../components/images/images/html5logo.jpg'
import cssimg from '../components/images/images/csslogo.png'
import wordpressimg from '../components/images/images/wordpress.png'
import mongoimg from '../components/images/images/mngodbimg.png'
import databasebimg from '../components/images/images/database.jpg'





class Project extends Component {
    render() {
        return (
       
            <section id="skillheader" className="flex-project-container">

                    <div><img src={pyimg} width="100" height="100" alt="python"/></div>
                    <div><img src={jsimg} width="100" height="100" alt="js"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div><img src={wordpressimg} width="100" height="100" alt="wordpress"/></div>
                    <div><img src={mongoimg} width="100" height="100" alt="mongodb"/></div>  
                    <div><img src={databasebimg} width="100" height="100" alt="db"/></div>
                
            </section>
        )
    }
}

export default Project