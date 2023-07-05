import { uuidv4 } from "@firebase/util";
import React, { useState } from "react";
import { db } from "../utils/firebase";
import {  collection, doc, setDoc } from "firebase/firestore";
import {auth} from "../utils/firebase";


// function userID({email, setEmail}) {
//     const handleChange = (e) => {
//         setValue(e.target.value)
//     };
//     console.log(email)
// }

const NewPost = () => {
    const postId = uuidv4();
    const HandleFormSubmit = async (e) => {
        e.preventDefault();
        
        
        // const userID = props;
        const title = e.target.title.value;
        const content = e.target.content.value;
        const like = 0;
        const shares = 0;
        const userID = auth.currentUser.email;

        e.target.title.value = "";
        e.target.content.value = "";

        // console.log(userID())

        const dbRef = collection(db,"Posts");

        try {
            await setDoc(doc(dbRef, postId), {
            title: title,
            content: content,
            like:like,
            shares:shares,
            userID: userID
            // userID: userID,
            });
            console.log("New post added successfully!");
        } catch (error) {
            console.error("Error adding new post:", error);
        }
    };

    return (
        
        <form className="new-post-form" onSubmit={HandleFormSubmit}>
            
            <div className="new-post-title">
                <label htmlFor="title">Title </label>
                <input type="text" name="title" id="title" required placeholder="Title"/>
                </div>

            <div className="new-post-content">
                <label>Blog Content</label>
                <textarea name="content" id="content" placeholder="What's on your mind?" />
                <br></br>
            </div>
            
            <div className="new-post-button">
                <button type="submit">Create Post</button>
            </div>
        </form>
    );
};

export default NewPost;