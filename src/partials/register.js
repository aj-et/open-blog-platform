
import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { uuidv4 } from "@firebase/util";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [userID, setUserID] = useState(uuidv4());

    const register = (e) => {
        e.preventDefault();
        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password, userID).then ((userCredential) => {
            // const user = userCredential.user;
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        });

        // This will empy out the fields after clicking button
        setEmail('');
        setPassword('');
        setCPassword('');
        setUserID('');
    };

    return (
        <div id="register-content">
                <form id="register" onSubmit={register}>
                <fieldset>
                    <legend>Register - New User</legend>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>

                    <label htmlFor="psw">Password</label>
                    <input type="password" placeholder="Password" name="psw" value={password} onChange={e => setPassword(e.target.value)} required/>

                    <label htmlFor="cpsw">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" name="cpsw" value={cPassword} onChange={e => setCPassword(e.target.value)} required/>
                    <button type="submit">Register</button>
                </fieldset>
            </form>
        </div>
    )
}