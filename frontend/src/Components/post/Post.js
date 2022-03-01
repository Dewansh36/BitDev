import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from '../../Public/css/post.module.css'

function Post() {
  return <div>
        <div className={Styles.background}>
  <div className={Styles.container}>
    <div className={Styles.screen}>
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
      <div className={Styles["screen-body"]}>
        <div className={`${Styles.left} ${Styles["screen-body-item"]}`}>
          <div className={Styles["app-title"]}>
            <span>CREATE</span>
            <span>POST</span>
          </div>
          
          <br />
          <div className={Styles.gif} style={{paddingTop: "2rem"}}>
              <img src="https://i.pinimg.com/originals/e4/d3/95/e4d395849317f98f2a418c0e10182b0d.gif" alt="" 
              style={{width: "230px"}} />
          </div>
        </div>
        <div className={Styles["screen-body-item"]}>
          <form className={Styles["app-form"]}>
            <div className={Styles["app-form-group"]}>
              <input className={Styles["app-form-control"]} placeholder="NAME" value="Parthiv Sarkar" />
            </div>
            <div className={Styles["app-form-group"]}>
              <input className={Styles["app-form-control"]} placeholder="Post-Name" required/>
            </div>
            <div className={`${Styles.message} ${Styles["app-form-group"]}`}>
              <textarea className={Styles["app-form-control"]} placeholder="Post-Description"/>
            </div>
            <div className={Styles["app-form-group"]}>
              <input className={Styles["app-form-control"]} placeholder="Tech-Stack"/>
            </div>
            <div className={Styles["app-form-group"]}>
                <input className={Styles["app-form-control"]} type="file" multiple />
            </div>
            <div className={`${Styles.buttons} ${Styles["app=form-group"]}`}>
              <button className={Styles["app-form-button"]}>CANCEL</button>
              <button className={Styles["app-form-button"]}>SEND</button>
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

