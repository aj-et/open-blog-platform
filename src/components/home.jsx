import icon from '../images/surprise-box.png'
import SideBar from './sidebar'
import '../styles/home.css'

// This will contain the home page wireframe

export default function HomePage() {
    return(
        <div className='home-page'>
            <h1>Welcome to the Blog Page!</h1>
            
            <main className='main-container'>
                <div className='blog-site'>
                    <img src={icon} alt='icon' />
                    <h2>Profile</h2>
                    <p>lorem ipsum stuff</p>
                </div>
                <div className='side-bar'>
                    <SideBar />
                </div>
            </main>
        </div>
    )
}