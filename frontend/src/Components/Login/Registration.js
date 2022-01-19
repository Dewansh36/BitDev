import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../../Public/css/registration.css'


const Register=() => {
    const [pos, setPos]=useState(0);
    const nextBtn=() => {
        console.log('Console!');
        const pages=document.querySelectorAll('.page');
        const bar=document.querySelectorAll('.prog');
        if (pos<pages.length-1) {
            pages[pos].classList.add('hide');
            pages[pos+1].classList.remove('hide');
            bar[pos+1].classList.add('active');
           
            setPos(pos+1);
        }
        
        
    }
    const prevBtn=() => {
        const pages=document.querySelectorAll('.page');
        const bar=document.querySelectorAll('.prog');
        console.log(bar);
        if (pos>0) {
            pages[pos].classList.add('hide');
            pages[pos-1].classList.remove('hide');
            bar[pos].classList.remove('active');
            setPos(pos-1);
        }
    }
    return (
        <div>
            <form action="/register" id="msform" method="post">
                <ul id="progressbar">
                    <li className="prog active">Account Setup</li>
                    <li className='prog'>Social Profiles</li>
                    <li className='prog'>Personal Details</li>
                </ul>
                <fieldset className='page'>

                    <h2 className="fs-title">Create your account</h2>
                    <h3 className="fs-subtitle">Enter your credentials</h3>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="cpass" placeholder="Confirm Password" />
                    <input type="button" name="next" className="next action-button" value="Next" onClick={nextBtn} />
                </fieldset>
                <fieldset className='page hide'>

                    <h2 className="fs-title">Coding Profiles</h2>
                    <h3 className="fs-subtitle">Your Coding Handles</h3>
                    <input type="text" name="codeforces" placeholder="Codeforces Handle" />
                    <input type="text" name="codechef" placeholder="Codechef Handle" />

                    <input type="button" name="previous" className="previous action-button" value="Previous" onClick={prevBtn} />
                    <input type="button" name="next" className="next action-button" value="Next" onClick={nextBtn} />
                </fieldset>

                <fieldset className='page hide'>
                    <h2 className="fs-title">Personal Details</h2>
                    <h3 className="fs-subtitle">All About You</h3>
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" placeholder="Last Name" />
                    <input type="text" name="collegename" placeholder="College Name" />
                    <textarea name="description" placeholder="Your bio"></textarea>
                    <input type="button" name="previous" className="previous action-button" value="Previous" onClick={prevBtn} />
                    <button className="action-button" >submit</button>
                </fieldset>

            </form>
        </div>
    )
}

export default Register