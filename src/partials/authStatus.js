import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { Link } from 'react-router-dom';



function  AuthStatus(){
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
    return(

        <nav className="nav-links">
            { authUser ? <Link to='/' onClick={userSignOut}>Logout</Link> : <Link to='/login'>Login</Link> }
        </nav>

    )
}

export default AuthStatus