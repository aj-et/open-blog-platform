
import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


// import React from "react";
// import { useState } from "react";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();
        // const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then ((userCredential) => {
            // const user = userCredential.user;
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        });

        // This will empy out the fields after clicking button
        setEmail('');
        setPassword('');
    };

    return (
        <div className="modal-content animate">
            {/* We need to use hooks on this one */}
            {/* <div onClick={`${document.getElementById('id01').style.display='none'}`} className="close" title="Close Form">&times;</div> */}
            
            <div className="modal-header-text">
                <h2>Login</h2>
            </div>

            <div className="container">
                <form action="" method="post" id="login" onSubmit={login}>
                    <label htmlFor="uname">Username</label>
                    <input type="email" placeholder="Enter Username" name="uname" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor="psw">Password</label>
                    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button type="submit">Login</button>
                    <label>
                    {/* The checked needs to be replaced with either an onClick or onChange? */}
                    {/* <input type="checkbox" checked="checked" name="remember"/> <span>Remember me</span> */}
                    </label>
                </form>

                <div className="container">
                    <h2>Don't have an account?</h2>
                    <div className="reg"><a href="#">Register</a></div>
                </div>
            </div>
        </div>
    );
};