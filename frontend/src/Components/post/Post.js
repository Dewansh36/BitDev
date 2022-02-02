import React from 'react';
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Public/css/post.css'
import { useDispatch, useSelector } from 'react-redux';
import { regisPost } from '../../actions/postAction';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Post() {
  const dispatch = useDispatch()
  const [title,setTitle] =useState('')
  const [images,setImage] =useState([])
  const [description,setDescription] =useState('')
  const [techStack,settechStack] = useState('')
  const notify=(message, type) => toast(`${message}`, { type: type });
  const fileSelectedHandler = (event) => {
    setImage(event.target.files)
    console.log(event.target.files)
    console.log(images)
  }
  const registerPost =(e)=>{
    e.preventDefault();
    const postData={
      title,
      description,
      techStack,
      images
    }
    dispatch(regisPost(postData))
  }
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
          <form className="app-form" encType='multipart/form-data' onSubmit={registerPost}> 
            <div className="app-form-group">
              <input className="app-form-control" placeholder="AUTHOR" name='author' />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Post-Title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            </div>
            <div className="app-form-group message">
              <textarea className="app-form-control" placeholder="Post-Description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="app-form-group ">
              <input className="app-form-control" placeholder="Tech-Stack" name="techStack" value={techStack} onChange={(e)=>settechStack(e.target.value)}/>
            </div>
            <div className="app-form-group">
                <input className='app-form-control' type="file" name="images" multiple onChange={fileSelectedHandler}/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button" type='submit'>SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </div>
</div>
<ToastContainer position='top-center' />
  </div>;
}

export default Post;
