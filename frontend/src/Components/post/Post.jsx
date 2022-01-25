import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Public/css/post.css'

function Post() {
  return <div>
        <div className="background">
  <div className="container">
    <div className="screen">
      {/* <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div> */}
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CREATE</span>
            <span>POST</span>
          </div>
          
          <br />
          <div className="gif" style={{paddingTop: "2rem"}}>
              <img src="https://i.pinimg.com/originals/e4/d3/95/e4d395849317f98f2a418c0e10182b0d.gif" alt="" 
              style={{width: "230px"}} />
          </div>
        </div>
        <div className="screen-body-item">
          <form className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" value="Parthiv Sarkar" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Post-Name" required/>
            </div>
            <div className="app-form-group message">
              <textarea className="app-form-control" placeholder="Post-Description"/>
            </div>
            <div className="app-form-group ">
              <input className="app-form-control" placeholder="Tech-Stack"/>
            </div>
            <div className="app-form-group">
                <input className='app-form-control' type="file" multiple />
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </div>
</div>

  </div>;
}

export default Post;
