import '../styles/sidebar.css'
import profileImg from '../images/surprise-box.png'

export default function SideBar () {
    return(
        <div className='profile-container'>
            <img className='profile-image' src={profileImg} alt='profile' />
            <div className='profile-card'>
                <h3 className='profile-name'>Put profile name here</h3>
                <hr />
                <h5>ABOUT ME</h5>
                <p>Lorem Ipsum Stuff</p>
                <hr />
                <h5>Note</h5>
                <input placeholder='Click to add a note' />
            </div>
        </div>
    ) 
}