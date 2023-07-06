import icon from '../images/surprise-box.png'
import SideBar from './sidebar'
import '../styles/home.css'
import PostObject from '../partials/Post';
import {useState, useEffect} from "react";
// import postData from "../data/posts.json";
import fetchPostData from '../partials/fetchPostData';

// This will contain the home page wireframe

export default function HomePage() {
const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchPostData();
      setPostData(fetchedData);
    };

    fetchData();
  }, []);

  if (postData == null){
    return (
        <div className='home-content'>
            <h1 className='hero-text'>Welcome to the Blog Page!</h1>
            
            <main className='home-container'>
                
                
                <div className='posts'>
                    <h1>Loading</h1>
                </div>
                    
                    
                <div className='side-bar'>
                    <SideBar />
                </div>
            </main>
        </div>
    )
  }
  else{

  
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
}