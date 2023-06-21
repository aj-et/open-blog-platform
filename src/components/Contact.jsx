import React, { Component } from 'react'
import contact from '../components/images/images/contactlogo.png';
import mailme from '../components/images/images/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3> <strong>Open-Blog-Platform</strong></h3>
                <h4>Random Text Random text Random text</h4>
                <h4>Email Id: Blogger@gmail.com</h4>
                <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=openblogplatform@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
                <h4>Contant Info: 123-456-7890/123-4566-7890</h4>

                
                
                       
                
            </section>
        )
    }
}

export default Contact