import React, { Fragment } from "react";
import './Project.css'

const Project = () => {
  return (
    <Fragment>
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
                  <div className="m-3 rounded-3 bg-light bordered">
                    <button className="btn rounded-circle btn-success d-inline my-3 text-center mx-2 fs-6 fw-normal text-black pColor">
                      AA
                    </button>
                    <h6 className="d-inline">Aman Agrawal</h6>
                    <div className="dropdown d-inline float-end m-3">
                      <div
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-three-dots-vertical"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                      </div>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            View profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Add friend
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Message
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg"
                            className="d-block w-100 pImg"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg"
                            className="d-block w-100 pImg"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg"
                            className="d-block w-100 pImg"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="icon">
                    <i class="far fa-thumbs-up ms-2 p-2"></i>
                    <i class="far fa-comments p-2"></i>
                      <h5 className="postTitle">Project Title</h5>
                    </div>
                    <div>
                      <p className="px-3 my-0 fw-light">100000 likes</p>
                      <p className="px-3 text-bold my-0">Hello my project is about more...</p>
                      <p className="px-3 fw-light my-0">
                        view all 200000 comments
                      </p>
                      <p className="px-3 fw-light my-0"> 5 days ago </p>
                    </div>
                    <div className="row m-0 ">
                      <form>
                        <input
                          type="text"
                          className="col-8 border-0 col-form-label form-control mb-3"
                          placeholder="Comment..."
                        />
                      </form>
                    </div>
                  </div>
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
    </Fragment>
  );
};

export default Project;
