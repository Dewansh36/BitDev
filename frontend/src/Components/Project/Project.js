import React, { Fragment, useEffect } from "react";
import './Project.css'
import Product from '../Product/Product'
import { getPost } from "../../actions/postAction";
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../loading'
const product = {
  title: 'Project Title',
  images: [{url:'https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg'}],
  author: 'Linken',
  likes: 123,
  comments: 234,
  description: 'Hello my project is about more...',
}

const Project = () => {
  const dispatch = useDispatch();
  const {loading,error,posts,postsCount} = useSelector(
    (state) => state.posts
    )
  useEffect(()=>{
    dispatch(getPost())
  },[dispatch])
  return (
    <Fragment>
      {loading ? (<Loading></Loading>):(<Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 d-none d-sm-block"></div>
          <div className="col-md-8 col-sm-12 bgcolour rounded-3">
            <div className="container-fluid">
              <div className="row" style={{height: "100vh"}}>
                <div
                  className="col-xxl-8 col-lg-12 col-sm-12 col-md-12 overflow-auto hiddenscroll"
                  style={{height: "100%"}}
                >
                  {posts && posts.map(post => (
                    <Product product={post}/>
                  ))}
                </div>
                <div className="col-xxl-4 d-none d-xxl-block my-3 bordered" style={{height: "fit-content"}}>
                  <p className="fw-bold fw-light mb-4">Suggestions for you... </p>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-3">
                        <button className="btn rounded-circle btn-success fs-6 text-black pColor">
                          aa
                        </button>
                      </div>
                      <div className="col-7 fs-6 mb-1">
                        <div className="row fw-bold">Aman Agarwal</div>
                        <div className="row mb-2 fs-6 fw-light">amanagarwal</div>
                      </div>
                      <div className="col-2 text-primary" style={{cursor: "pointer"}}>Follow</div>
                    </div>
                  </div>
                  <a href="/suggestions">
                    <div className="fw-light fw-bold text-center mb-2">
                      See all suggestions...
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 d-none d-sm-block"></div>
        </div>
      </div>
    </Fragment>)}
    </Fragment>
  );
};

export default Project;
