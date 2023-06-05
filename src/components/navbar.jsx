
import logo from '../images/surprise-box.png'
import '../styles/navbar.css'
import AuthStatus from '../partials/authStatus'

import { Link } from 'react-router-dom'

export default function NavBar () {
    return (
        <div>
            <nav className="nav-bar">
                <img src={logo} alt="logo" />
                {/* <a href="https://www.flaticon.com/free-icons/random" title="random icons">Random icons created by noomtah - Flaticon</a> */}
                <div className='nav-links'>
                {/* Change CSS from a to link */}
                    <Link to='/'>Home</Link>
                    {/* <Link to='/auth'>Login/Register</Link> */}
                    <Link to='/profile'>Profile</Link>
                    <AuthStatus />
                </div>
            </nav>
        </div>
    )
}