import '../styles/sidebar.css'
// import profileImg from '../images/profileImages/'
import profile1 from '../images/profileImages/pexels-brandan-saviour-2741701.jpg';
import profile2 from '../images/profileImages/pexels-ketut-subiyanto-4350178.jpg';
import profile3 from '../images/profileImages/pexels-leeloo-thefirst-4542178.jpg';
import profile4 from '../images/profileImages/pexels-sinitta-leunen-6652928.jpg';
import {collection, getDocs} from "firebase/firestore";
import { db} from "../utils/firebase";

export default function SideBar () {
    const fetchUserNames = async () => {
        try {
          const dbRef = collection(db,"Posts");
          const snapshot = await getDocs(dbRef);
          const usernamesArray = snapshot.docs.map((doc) => doc.data('usernames'));
          return fetchedData;
        } catch (error) {
          console.log('Error fetching data:', error);
          return null;
        }
      };
      fetchUserNames();
    return(
        <div className='sidebar'>
            <h2 className='profile-header'>Trending Profiles</h2>

            <div className='profile-container'>
                <img className='profile-image' src={profile1} alt='profile1' />
                <img className='profile-image' src={profile2} alt='profile2' />
                <img className='profile-image' src={profile3} alt='profile3' />
                <img className='profile-image' src={profile4} alt='profile4' />
            </div>

            {/* <div className='profile-card'> */}
                
                <br/>
                <hr/>
                <br/>
                <h2>Other Popular Profiles</h2>

                <div className='profile-links'>
                    

                    {usernamesArray.map((user) =><a href= "/">{user}</a> )}
                    {/* postData.map(post =>
                        <PostObject contentJson = {post} key = {post.postID}></PostObject>) */}
                    <a href="/">Charles</a>
                    <a href="/">Bethany</a>
                    <a href="/">Emma</a>
                    <a href="/">Rachel</a>
                    <a href="/">Timothy</a>
                    
                </div>

                {/* <p>Lorem Ipsum Stuff</p> */}
                {/* <hr /> */}
                {/* <h5>Note</h5> */}
                {/* <input placeholder='Click to add a note' /> */}

            {/* </div> */}
        </div>
    ) 
}