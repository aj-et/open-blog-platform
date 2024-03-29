import React from "react";

// import { useState } from "react";
// import "./post.css"

import { useState } from "react";
import {post} from "../post.css"
// import {post} from '../styles/post.css'



export default function PostObject(props){
    const { contentJson } = props
    console.log(contentJson.id)
    return(
        <div className="post">
            
            <div>{contentJson.key}</div>
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