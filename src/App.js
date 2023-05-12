import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import React from 'react';
import PostObject from './Post';
import postData from "./posts.json"

function App() {
  // const [data, setData] = useState([]);


  // useEffect(() => {
  //   fetch("./posts.json")
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error(error));
  // }, []);
  

  return (
    
    <div className="App" id="app">
      
      {
      postData.map(post =>
        <PostObject contentJson = {post} key = {post.postID}></PostObject>)
      }
    </div>
  );
}

export default App;
