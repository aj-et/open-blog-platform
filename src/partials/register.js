
import React, { useState } from "react";

export default function Register() {
return (

<div id="register-content">
        <form id="register">
        <fieldset>
            <legend>Register - New User</legend>
            <label for="email">Email</label>
            <input type="email" placeholder="Email" name="email" required/>

            <label for="psw">Password</label>
            <input type="password" placeholder="Password" name="psw" required/>

            <label for="cpsw">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" name="cpsw" required/>
            <button type="submit">Register</button>
        </fieldset>
    </form>
</div>

)
}