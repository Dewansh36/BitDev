import React, { useReducer } from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Public/css/post.css'
import FormData from 'form-data';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const initialState={
  title: '',
  description: '',
  techStack: '',
  images: ''
}

const reducer=(state, action) => {
  let field=action.type;
  // console.log(state);
  switch (field) {
    case "title":
      {
        return {
          ...state,
          title: action.payload,
        }
      }
    case "description":
      {
        return {
          ...state,
          description: action.payload,

        }
      }
    case 'techStack':
      {
        return {
          ...state,
          techStack: action.payload,

        }
      }
    case 'images':
      {
        return {
          ...state,
          images: action.payload,
        }
      }
  }
}

function Post() {
  const navigate=useNavigate();

  const notify=(message, type) => toast(`${message}`, { type: type });

  const [state, dispatch]=useReducer(reducer, initialState);
  const [loading, setLoading]=useState(false);

  const submitHandler=async (e) => {
    e.preventDefault();

    let postData=new FormData();

    for (let keys of Object.keys(state.images)) {
      postData.append("images", state.images[keys]);
    }
    postData.append("title", state.title);
    postData.append("description", state.description);
    postData.append("techStack", state.techStack);
    // console.log(state.images[0]);
    console.log("postdata:  ", postData);
    axios.post('http://localhost:4000/posts/new', postData, {
      withCredentials: true
    })
      .then((response) => {
        let { success, error, post }=response.data;
        if (error) {

        }
      })

  }


  return (
    <div>
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
                <div className="gif" style={{ paddingTop: "2rem" }}>
                  <img src="https://i.pinimg.com/originals/e4/d3/95/e4d395849317f98f2a418c0e10182b0d.gif" alt=""
                    style={{ width: "230px" }} />
                </div>
              </div>
              <div className="screen-body-item">
                <form className="app-form" onSubmit={submitHandler}>
                  {/* <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME" value="Parthiv Sarkar" />
                  </div> */}
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="Post-Name" value={state.title} onChange={(e) => { dispatch({ type: "title", payload: e.target.value }) }} required />
                  </div>
                  <div className="app-form-group message">
                    <textarea className="app-form-control" placeholder="Post-Description" value={state.description} onChange={(e) => { dispatch({ type: "description", payload: e.target.value }) }} />
                  </div>
                  <div className="app-form-group ">
                    <input className="app-form-control" placeholder="Tech-Stack" value={state.techStack} onChange={(e) => { dispatch({ type: "techStack", payload: e.target.value }) }} />
                  </div>
                  <div className="app-form-group">
                    <input className='app-form-control' type="file" multiple onChange={(e) => { dispatch({ type: "images", payload: e.target.files }) }} />
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

    </div>
  );
}

export default Post;
