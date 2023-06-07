import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";


import NewPost from "./newPost";

import { Link } from 'react-router-dom';


export default function AuthStatus () {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listener = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listener();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out succesful')
        }).catch(error => console.log(error))
    }

    // Items here will show up when logged in

    return(
    <div className="container">
            { authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button>
            <NewPost userID ={authUser.email}/></> : <p>No accounts signed in!</p> }

           
        </div>

    )
}