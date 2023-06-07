import React, { Component } from 'react'
import biologo from './images/images/biopicimg.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={biologo} width="180" height="180" alt="abtimg"/>
                    <p>Hey there! I'm BLOGGERNAME, and I'm thrilled to have you here on my blog. As a lifelong learner and passionate advocate for personal growth, I created this platform to share my insights, experiences, and discoveries with the aim of empowering and inspiring others on their own journeys.
                    </p>
                
            </section>
        )
    }
}

export default About