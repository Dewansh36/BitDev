import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../../Public/css/registration.css'
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const Login=() => {
    const [password, setPassword]=useState('');

    const verify=(e) => {

        setPassword(e.target.value);
    }
    const check=(e) => {
        if (password.length<8) {
            console.log("error");
            e.preventDefault();
            return;
        }
    }
    return (

        <div>
            <form id="msform" action="http://localhost:4000/login" onSubmit={check} method='post'>
                <fieldset>
                    <h2 className="fs-title">Login</h2>
                    <h3 className="fs-subtitle">Login to your account</h3>
                    <input type="text" name="username" placeholder="Username"></input>
                    <input type="password" name="password" value={password} placeholder="Password" onChange={verify} />
                    <button className="action-button">
                        Submit
                    </button>
                    <div id='pop-up'>

                    </div>

                    <h3 className="fs-subtitle">Don't have an account?
                        <a href="/register">click here</a>
                    </h3>
                    <h3 className="fs-subtitle">Forgot Password?
                        <a href="/forgot">click here</a>
                    </h3>
                </fieldset>
            </form>
        </div>


    )
}

export default Login