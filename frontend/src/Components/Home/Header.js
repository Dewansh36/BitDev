import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import'./App.css'

import{Grid,Row,Col}  from "react-bootstrap"

const mystyle = {
    color: "white",
    backgroundColor: "green",

    positon:"absolute",
 height:"45px",
 borderRadius:"25px",
 width:"90px",
justfycontent:"space-between",
top:"45px",
fontSize:"20px",
    right:"21px",
    fontFamily: "Arial"
  };

  const mystyle1={
color:"white",
positon:"absolute",
height:"45px",
width:"90px",
fontSize:"20px",
borderRadius:"20px",
justfycontent:"space-between",
    right:"120px",
    top:"45px",
backgroundColor:"green"
  };

export default function Header (){
    return(<>
      
        <div className="top-right" >
        <img alt="" className="m-b-20" width="200" height="100" src="/Picture1.png">
        </img>

        <button  className="btn" type="submit"  style={mystyle} >Signup</button>
        <button  className="btn" type="submit" style={mystyle1} >Login</button>
       
    
        </div>
        </>
    )
}