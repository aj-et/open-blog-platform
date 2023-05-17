
import logo from '../images/surprise-box.png'

export default function NavBar () {
    return(
        <div>
            <nav className="nav-bar">
                <img src={logo} alt="logo" />
                {/* <a href="https://www.flaticon.com/free-icons/random" title="random icons">Random icons created by noomtah - Flaticon</a> */}
                <a href="/">Home</a>
                <a href="/">Text</a>
                <a href="/">Text</a>
            </nav>
        </div>
    )
}