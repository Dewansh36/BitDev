import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../../Public/css/registration.css'
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const Login=() => {
    const [password, setPassword]=useState('');
    const [username, setUsername]=useState('');
    const verify=(e) => {
        setPassword(e.target.value);
    }
    const check=(e) => {
        e.preventDefault();
        if (password.length<4) {
            console.log("error");
            return;
        }
        console.log(
            {
                username: username,
                password: password
            }
        );
        axios.post('http://localhost:4000/login', {
            username: username,
            password: password
        }).then((response) => {
            console.log(response.data);
        })
            .catch((err) => {
                console.log(err);
            })
    }
    return (

        <div>
            <form id="msform" action="#" onSubmit={check} method='post'>
                <fieldset>
                    <h2 className="fs-title">Login</h2>
                    <h3 className="fs-subtitle">Login to your account</h3>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }}></input>
                    <input type="password" name="password" value={password} placeholder="Password" onChange={verify} />
                    <button className="action-button">
                        Submit
                    </button>
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