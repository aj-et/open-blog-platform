import '../styles/sidebar.css'
// import profileImg from '../images/profileImages/'
import profile1 from '../images/profileImages/pexels-brandan-saviour-2741701.jpg';
import profile2 from '../images/profileImages/pexels-ketut-subiyanto-4350178.jpg';
import profile3 from '../images/profileImages/pexels-leeloo-thefirst-4542178.jpg';
import profile4 from '../images/profileImages/pexels-sinitta-leunen-6652928.jpg';
import { useEffect, useState } from 'react';
import { addDoc, collection, setDoc, deleteDoc, doc, query, onSnapshot } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid'; 
import { db, app } from "../utils/firebase";
import {getDocs} from "firebase/firestore";


// can all images be placed in the database and pulled from there

// insert imports that will give access to the database
const usernames = [];


export default function SideBar () {

    useEffect(() => {
        const getData = async () => {
          const data = await query(collection(db, "Posts"));
     
          onSnapshot(data, (querySnapshot) => {
            const databaseInfo = [];
            const dataIds = []
     
            querySnapshot.forEach((doc) => {
              databaseInfo.push(doc.data().testData);
              dataIds.push(doc.id)
            });
     
            // setIds(dataIds)
            // setInfo(databaseInfo)
          });
          

          
        } 
     
        getData()
      }, [])
//     // const postsRef2 = query(collection(db,"Posts"));
//     const querySnapshot =  getDocs(collection(db, "Posts"));
// querySnapshot.((doc) => {
//   console.log(`${doc.userID}`);
// });

//     // const postsRef = db.collection('Posts');
//     // console.log(postsRef);
//     // console.log("Hello world", postsRef2)

    
    
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
                    {usernames.map((user) =><a href= "/">{user}</a> )}

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