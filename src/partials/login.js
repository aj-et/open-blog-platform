// Use this to call the function in App.js
{/* <div className="login-form">
    {<Login></Login>}
</div> */}

import React, { useState } from "react";

export default function Login() {
return (

<div className="modal-content animate">
    <div onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Form">&times;</div>
    
    <div className="modal-header-text">
        <h2>Login</h2>
    </div>

    <div className="container">
        <form action="" method="post" id="login">
            <label for="uname">Username</label>
            <input type="text" placeholder="Enter Username" name="uname" required/>
            <label for="psw">Password</label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            <button type="submit">Login</button>
            <label>
            <input type="checkbox" checked="checked" name="remember"/> <span>Remember me</span>
            </label>
        </form>

        <div className="container">
            <h2>Don't have an account?</h2>
            <div className="reg"><a href="#">Register</a></div>
        </div>
    </div>
</div>

)
}