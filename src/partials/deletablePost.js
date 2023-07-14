import { collection, deleteDoc, doc } from "firebase/firestore";
import React, { useEffect } from "react";
import {db} from "../utils/firebase";

import { useState } from "react";



const handleDelete = (contentJson) =>{
        const deleteData = async () =>{
            try{
            const dbRef = doc(db, "Posts", contentJson.postId)
            await deleteDoc(dbRef);
            console.log("successful here")
            
            }
            catch(error){
                console.log(error, "Couldn't delete it")
            }


        }
        deleteData();

   
}



export default function DeletablePostObject(props){

    const { contentJson } = props;
    console.log(contentJson.postId)
    return(
        <div className="post">

            <a href = "#"><button className="deleteButton" onClick={()=>handleDelete(contentJson)}>Delete</button></a>
            <div className="userID"><a href = "#">{contentJson.userID}</a></div>
            <div className="heading"><a href = "#">{contentJson.title}</a></div>
            <div className="content">{contentJson.content}</div>
            <div className="bottom">
            <div className="like-count"><button id = "like">👍</button>{contentJson.like_count}<label> Likes</label></div>
            <div className="share-count"><button id = "share">⌲</button>{contentJson.share_count}<label> Shares</label></div>

            
            </div>
        
        </div>
    )
}