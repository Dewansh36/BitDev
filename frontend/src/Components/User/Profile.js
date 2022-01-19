import React, { Fragment, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [toogleState, setToogleState] = useState(1);

  const toogleTab = (index) => {
    setToogleState(index);
  };
  return (
    <Fragment>
      {/* <img
        src="https://res.cloudinary.com/dewansh/image/upload/v1641545976/BitMart/Products/pOSTER_1_loitig.jpg"
        id="banner"
      /> */}
      <div className="m-3">
        <div className="row" id="user-profile">
          <div className="col-lg-3 col-md-4 col-sm-4">
            <div className="main-box">
              <h2>Linken Vashistha</h2>
              <div className="profile-status">
                <i className="fa fa-check-circle"></i> Online
              </div>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
                className="profile-img img-fluid center-block"
              />
              <div className="profile-label">
                <span className="badge bg-danger">Admin</span>
              </div>

              <div className="profile-stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>

              <div className="profile-since">Member since: Jan 2012</div>

              <div className="profile-details">
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fa fa-tasks"></i>Posts: <span>828</span>
                  </li>
                  <li>
                    <i className="fa-li fa fa-thumbs-up"></i>Likes:{" "}
                    <span>456</span>
                  </li>
                  <li>
                    <i className="fa-li fa fa-comment"></i>Comments:{" "}
                    <span>1024</span>
                  </li>
                </ul>
              </div>

              <div className="profile-message-btn center-block text-center">
                <button className="btn btn-success">
                  <i className="fa fa-envelope"></i> Send message
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-md-8 col-sm-8">
            <div className="main-box">
              <div className="profile-header">
                <h3>
                  <span style={{ color: "black" }}>User info</span>
                </h3>
                <button className="btn btn-primary edit-profile">
                  <i className="fa fa-pencil-square fa-lg"></i> Edit profile
                </button>
              </div>

              <div className="profile-user-info" id="userInfo">
                <div id="userInfo1">
                  <div className="profile-user-details">
                    <div className="profile-user-details-label">Username&nbsp;<i class="fas fa-user"></i></div>
                    <div className="profile-user-details-value">
                      linkenvashistha
                    </div>
                  </div>
                  <div className="profile-user-details">
                    <div className="profile-user-details-label">Email&nbsp;<i class="fas fa-envelope"></i></div>
                    <div className="profile-user-details-value">
                      vashisthalinken@gmail.com
                    </div>
                  </div>
                  <div className="profile-user-details">
                    <div className="profile-user-details-label">College&nbsp;<i class="fas fa-university"></i></div>
                    <div className="profile-user-details-value">
                      Birla institue of technology
                    </div>
                  </div>
                  <div className="profile-user-details">
                    <div className="profile-user-details-label" style={{fontSize: '15px'}}>
                      Codeforces&nbsp;<span class="iconify" data-icon="simple-icons:codeforces"></span>
                    </div>
                    <div className="profile-user-details-value">
                      linken_vashistha
                    </div>
                  </div>
                  <div className="profile-user-details">
                    <div className="profile-user-details-label">
                      Codechef&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-badge-cc-fill" viewBox="0 0 16 16">
              <path
                d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3.027 4.002c-.83 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05H7.36v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747C2.5 6.051 3.414 5 5.018 5c1.318 0 2.29.813 2.342 2v.11H6.213c-.048-.638-.505-1.108-1.186-1.108zm6.14 0c-.831 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.318 1.727.69 0 1.139-.435 1.187-1.05H13.5v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.751 2.518-2.751 1.318 0 2.29.813 2.342 2v.11h-1.147c-.048-.638-.505-1.108-1.187-1.108z" />
            </svg>
                    </div>
                    <div className="profile-user-details-value">linken</div>
                  </div>
                </div>
                {/* <div className="profile-social" id="userInfo2">
                  <ul className="fa-ul">
                    <li>
                    <span class="iconify" data-icon="simple-icons:codeforces"></span>
                      <a href="#">linken_vashistha</a>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-badge-cc-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3.027 4.002c-.83 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05H7.36v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747C2.5 6.051 3.414 5 5.018 5c1.318 0 2.29.813 2.342 2v.11H6.213c-.048-.638-.505-1.108-1.186-1.108zm6.14 0c-.831 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.318 1.727.69 0 1.139-.435 1.187-1.05H13.5v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.751 2.518-2.751 1.318 0 2.29.813 2.342 2v.11h-1.147c-.048-.638-.505-1.108-1.187-1.108z" />
                      </svg>
                      <a href="#">linken_vashistha</a>
                    </li>
                  </ul>
                </div> */}
              </div>

              <div className="tabs-wrapper profile-tabs">
                <ul className="nav nav-tabs">
                  <li
                    className={
                      toogleState === 1 ? "tabs tabs-active me-1" : "tabs me-1"
                    }
                    onClick={() => toogleTab(1)}
                  >
                    <a data-toggle="tab">Posts</a>
                  </li>
                  <li
                    className={
                      toogleState === 2 ? "tabs tabs-active ms-1" : "tabs ms-1"
                    }
                    onClick={() => toogleTab(2)}
                  >
                    <a data-toggle="tab">Friends</a>
                  </li>
                </ul>
                <hr></hr>
                <div
                  className={
                    toogleState === 1 ? "content active-content" : "content"
                  }
                >
                  <div className="card1 my-3">
                    <div className="image-data">
                      <div className="background-image"></div>
                      <div className="user-details">
                        <a href="#" className="author">
                          <i className="fas fa-user"></i>Linken Vashistha
                        </a>
                        <span className="date">
                          <i className="fas fa-calendar-day"></i>Jan 18,2021
                        </span>
                      </div>
                    </div>
                    <div className="post-data">
                      <h3 className="title">Artifical Intelligence</h3>
                      <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim, totam perferendis. Assumenda quae dolorem odit,
                        hic dicta aperiam consequuntur dolorum eum dolor,
                        reprehenderit quibusdam facilis accusantium! Reiciendis
                        molestias neque rem.
                      </p>
                      <div className="cta">
                        <a href="#">Read more</a>
                      </div>
                    </div>
                  </div>
                  <div className="card1 my-3">
                    <div className="image-data">
                      <div className="background-image"></div>
                      <div className="user-details">
                        <a href="#" className="author">
                          <i className="fas fa-user"></i>Linken Vashistha
                        </a>
                        <span className="date">
                          <i className="fas fa-calendar-day"></i>Jan 18,2021
                        </span>
                      </div>
                    </div>
                    <div className="post-data">
                      <h3 className="title">Artifical Intelligence</h3>
                      <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim, totam perferendis. Assumenda quae dolorem odit,
                        hic dicta aperiam consequuntur dolorum eum dolor,
                        reprehenderit quibusdam facilis accusantium! Reiciendis
                        molestias neque rem.
                      </p>
                      <div className="cta">
                        <a href="#">Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    toogleState === 2 ? "content active-content" : "content"
                  }
                >
                  <ul className="widget-users row m-3">
                    <li className="col-md-6">
                      <div className="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <div className="name">
                          <a href="#">John Doe </a>
                        </div>
                        <div className="time">
                          <i className="fa fa-clock-o"></i> Last online: 5
                          minutes ago
                        </div>
                      </div>
                    </li>
                    <li className="col-md-6">
                      <div className="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <div className="name">
                          <a href="#">Mila Kunis</a>
                        </div>
                        <div className="time online">
                          <i className="fa fa-check-circle"></i> Online
                        </div>
                      </div>
                    </li>
                    <li className="col-md-6">
                      <div className="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <div className="name">
                          <a href="#">Ryan Gossling</a>
                        </div>
                        <div className="time online">
                          <i className="fa fa-check-circle"></i> Online
                        </div>
                      </div>
                    </li>
                    <li className="col-md-6">
                      <div className="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <div className="name">
                          <a href="#">Robert Downey Jr.</a>
                        </div>
                        <div className="time">
                          <i className="fa fa-clock-o"></i> Last online:
                          Thursday
                        </div>
                      </div>
                    </li>
                    <li className="col-md-6">
                      <div className="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <div className="name">
                          <a href="#">Emma Watson</a>
                        </div>
                        <div className="time">
                          <i className="fa fa-clock-o"></i> Last online: 1 week
                          ago
                        </div>
                      </div>
                    </li>
                    <li className="col-md-6">
                      <div className="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <div className="name">
                          <a href="#">George Clooney</a>
                        </div>
                        <div className="time">
                          <i className="fa fa-clock-o"></i> Last online: 1 month
                          ago
                        </div>
                      </div>
                    </li>
                    <li className="col-md-6">
                      <div className="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <div className="name">
                          <a href="#">Mila Kunis</a>
                        </div>
                        <div className="time online">
                          <i className="fa fa-check-circle"></i> Online
                        </div>
                      </div>
                    </li>
                    <li className="col-md-6">
                      <div className="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <div className="name">
                          <a href="#">Ryan Gossling</a>
                        </div>
                        <div className="time online">
                          <i className="fa fa-check-circle"></i> Online
                        </div>
                      </div>
                    </li>
                  </ul>
                  <br />
                  <div id="btnUser" className="me-3">
                    <a href="#" className="btn btn-success mb-3">
                      View all users
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
