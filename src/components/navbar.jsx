
import logo from '../images/surprise-box.png'
import '../styles/navbar.css'
import login from '../partials/login.js'

export default function NavBar () {
    return (
        <div>
            <nav className="nav-bar">
                <img src={logo} alt="logo" />
                {/* <a href="https://www.flaticon.com/free-icons/random" title="random icons">Random icons created by noomtah - Flaticon</a> */}
                <div className='nav-links'>
                    <a href="/">Home</a>
                    <a href="">Login/Register</a>
                    <a href="/">Profile</a>
                </div>
            </nav>
        </div>
    )
}