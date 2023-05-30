import icon from '../images/surprise-box.png'
import SideBar from './sidebar'
import '../styles/home.css'
import PostObject from '../partials/Post';
import postData from "../data/posts.json";

// This will contain the home page wireframe

export default function HomePage() {
    return(
        <div className='home-content'>
            <h1 className='hero-text'>Welcome to the Blog Page!</h1>
            
            <main className='home-container'>
                

                <div className='posts'>
                    {  
                    postData.map(post =>
                        <PostObject contentJson = {post} key = {post.postID}></PostObject>)
                    }
                </div>
                    
                    
                <div className='side-bar'>
                    <SideBar />
                </div>
            </main>
        </div>
    )
}