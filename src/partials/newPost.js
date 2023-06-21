import { uuidv4 } from "@firebase/util";
import React, { useState } from "react";
import { db } from "../utils/firebase";
import {  collection, doc, setDoc } from "firebase/firestore";

const NewPost = () => {
  
  const postId = uuidv4();
  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    const userID = "nothing"
    document.getElementById("submit").style.backgroundColor="blue";
    const title = e.target.title.value;
    const content = e.target.content.value;

  
    const dbRef = collection(db,"Posts");
    
    try {
      await setDoc(doc(dbRef, postId), {
        title: title,
        content: content,
        userID: userID,
      });

      console.log("New post added successfully!");
    } catch (error) {
      console.error("Error adding new post:", error);
    }
  };

  return (
    <form onSubmit={HandleFormSubmit}>
      <legend>
        <label htmlFor="title">Do you have a title? </label>
        <input type="text" name="title" id="title" required />
      </legend>
      <legend>
        <textarea name="content" id="content" placeholder="What's your piece of thought?" />
      </legend>

      <button type="submit" id = "submit">Post</button>
    </form>
  );
};

export default NewPost;