import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./Profile.module.css";

const Profile=() => {
  const [toogleState, setToogleState]=useState(1);
  const { id }=useParams();
  const toogleTab=(index) => {
    setToogleState(index);
  };
  return (
    <Fragment>
      {/* <img
        src="https://res.cloudinary.com/dewansh/image/upload/v1641545976/BitMart/Products/pOSTER_1_loitig.jpg"
        id="banner"
      /> */}
      <div className={Styles["m-3"]}>
        <div className={Styles.row} id={Styles["user-profile"]}>
          <div className={`${Styles["col-lg-3"]} ${Styles[col-md-4]} ${Styles[col-sm-4]}`}>
            <div className={Styles["main-box"]}>
              <h2>Linken Vashistha</h2>
              <div className={Styles["profile-status"]}>
                <i className={`${Styles.fa} ${Styles["fa-check-circle"]}`}></i> Online
              </div>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
                className={`${Styles["profile-img"]} ${Styles["img-fluid"]} ${Styles["center-block"]}`}
              />
              <div className={Styles["profile-label"]}>
                <span className={`${Styles.badge} ${Styles["bg-danger"]}`}>Admin</span>
              </div>

              <div className={Styles["profile-stars"]}>
                <i className={`${Styles.fa} ${Styles["fa-star"]}`}></i>
                <i className={`${Styles.fa} ${Styles["fa-star"]}`}></i>
                <i className={`${Styles.fa} ${Styles["fa-star"]}`}></i>
                <i className={`${Styles.fa} ${Styles["fa-star"]}`}></i>
                <i className={`${Styles.fa} ${Styles["fa-star-o"]}`}></i>
              </div>

              <div className={Styles["profile-since"]}>Member since: Jan 2012</div>

              <div className={Styles["profile-details"]}>
                <ul className={Styles["fa-ul"]}>
                  <li>
                    <i className={`${Styles["fa-li"]} ${Styles.fa} ${Styles["fa-tasks"]}`}></i>Posts: <span>828</span>
                  </li>
                  <li>
                    <i className={`${Styles["fa-li"]} ${Styles.fa} ${Styles["fa-thumbs-up"]}`}></i>Likes:{" "}
                    <span>456</span>
                  </li>
                  <li>
                    <i className={`${Styles.fa} ${Styles["fa-li"]} ${Styles["fa-comment"]}`}></i>Comments:{" "}
                    <span>1024</span>
                  </li>
                </ul>
              </div>

              <div className={`${Styles["profile-message-btn"]} ${Styles["center-block"]} ${Styles["text-center"]}`}>
                <button className={`${Styles.btn} ${Styles["btn-success"]}`}>
                  <i className={`${Styles.fa} ${Styles["fa-envelope"]}`}></i> Send message
                </button>
              </div>
            </div>
          </div>

          <div className={`${Styles["col-lg-9"]} ${Styles["col-md-8"]} ${Styles["col-sm-8"]}`}>
            <div className={Styles["main-box"]}>
              <div className={Styles["profile-header"]}>
                <h3>
                  <span style={{ color: "black" }}>User info</span>
                </h3>
                <button className={`${Styles.btn} ${Styles["btn-primary"]} ${Styles["edit-profile"]}`}>
                  <i className={`${Styles.fa} ${Styles["fa-pencil-square"]} ${Styles["fa-lg"]}`}></i> Edit profile
                </button>
              </div>

              <div className={Styles["profile-user-info"]} id={Styles.userInfo}>
                <div id={Styles.userInfo1}>
                  <div className={Styles["profile-user-details"]}>
                    <div className={Styles["profile-user-details-label"]}>Username&nbsp;<i class={`${Styles.fas} ${Styles["fa-user"]} `}></i></div>
                    <div className={Styles["profile-user-details-value"]}>
                      linkenvashistha
                    </div>
                  </div>
                  <div className={Styles["profile-user-details"]}>
                    <div className={Styles["profile-user-details-label"]}>Email&nbsp;<i class={`${Styles.fas} ${Styles["fa-envelope"]} `}></i></div>
                    <div className={Styles["profile-user-details-value"]}>
                      vashisthalinken@gmail.com
                    </div>
                  </div>
                  <div className={Styles["profile-user-details"]}>
                    <div className={Styles["profile-user-details-label"]}>College&nbsp;<i class={`${Styles.fas} ${Styles["fa-university"]} `}></i></div>
                    <div className={Styles["profile-user-details-value"]}>
                      Birla institue of technology
                    </div>
                  </div>
                  <div className={Styles["profile-user-details"]}>
                    <div className={Styles["profile-user-details-label"]} style={{ fontSize: '15px' }}>
                      Codeforces&nbsp;<span class="iconify" data-icon="simple-icons:codeforces"></span>
                    </div>
                    <div className={Styles["profile-user-details-value"]}>
                      linken_vashistha
                    </div>
                  </div>
                  <div className={Styles["profile-user-details"]}>
                    <div className={Styles["profile-user-details-label"]}>
                      Codechef&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-badge-cc-fill" viewBox="0 0 16 16">
                        <path
                          d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3.027 4.002c-.83 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05H7.36v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747C2.5 6.051 3.414 5 5.018 5c1.318 0 2.29.813 2.342 2v.11H6.213c-.048-.638-.505-1.108-1.186-1.108zm6.14 0c-.831 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.318 1.727.69 0 1.139-.435 1.187-1.05H13.5v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.751 2.518-2.751 1.318 0 2.29.813 2.342 2v.11h-1.147c-.048-.638-.505-1.108-1.187-1.108z" />
                      </svg>
                    </div>
                    <div className={Styles["profile-user-details-value"]}>linken</div>
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

              <div className={`${Styles["tabs-wrapper"]} ${Styles["profile-tabs"]}`}>
                <ul className={`${Styles.nav} ${Styles["nav-tabs"]}`}>
                  <li
                    className={
                      toogleState===1? "tabs tabs-active me-1":"tabs me-1"
                    }
                    onClick={() => toogleTab(1)}
                  >
                    <a data-toggle="tab">Posts</a>
                  </li>
                  <li
                    className={
                      toogleState===2? "tabs tabs-active ms-1":"tabs ms-1"
                    }
                    onClick={() => toogleTab(2)}
                  >
                    <a data-toggle="tab">Friends</a>
                  </li>
                </ul>
                <hr></hr>
                <div
                  className={
                    toogleState===1? "content active-content":"content"
                  }
                >
                  <div className={`${Styles.card1} ${Styles["my-3"]}`}>
                    <div className={Styles["image-data"]}>
                      <div className={Styles["background-image"]}></div>
                      <div className={Styles["user-details"]}>
                        <a href="#" className={Styles.author}>
                          <i className={`${Styles.fas} ${Styles["fa-user"]}`}></i>Linken Vashistha
                        </a>
                        <span className={Styles.date}>
                          <i className={`${Styles.fas} ${Styles["fa-calendar-day"]}`}></i>Jan 18,2021
                        </span>
                      </div>
                    </div>
                    <div className={Styles["post-data"]}>
                      <h3 className={Styles.title}>Artifical Intelligence</h3>
                      <p className={Styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim, totam perferendis. Assumenda quae dolorem odit,
                        hic dicta aperiam consequuntur dolorum eum dolor,
                        reprehenderit quibusdam facilis accusantium! Reiciendis
                        molestias neque rem.
                      </p>
                      <div className={Styles.cta}>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                  </div>
                  <div className={`${Styles.card1} ${Styles["my-3"]}`}>
                    <div className={Styles["image-data"]}>
                      <div className={Styles["background-image"]}></div>
                      <div className={Styles["user-details"]}>
                        <a href="#" className={Styles.author}>
                          <i className={`${Styles.fas} ${Styles[fa-user]}`}></i>Linken Vashistha
                        </a>
                        <span className={Styles.date}>
                          <i className={`${Styles.fas} ${Styles["fa-calendar-day"]}`}></i>Jan 18,2021
                        </span>
                      </div>
                    </div>
                    <div className={Styles["post-data"]}>
                      <h3 className={Styles.title}>Artifical Intelligence</h3>
                      <p className={Styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim, totam perferendis. Assumenda quae dolorem odit,
                        hic dicta aperiam consequuntur dolorum eum dolor,
                        reprehenderit quibusdam facilis accusantium! Reiciendis
                        molestias neque rem.
                      </p>
                      <div className={Styles.cta}>
                        <a href="#">Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    toogleState===2? "content active-content":"content"
                  }
                >
                  <ul className={`${Styles["widget-users"]} ${Styles.row} ${Styles["my-3"]}`}>
                    <li className={Styles["col-md-6"]}>
                      <div className={Styles.img}>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className={Styles["img-fluid"]}
                          alt=""
                        />
                      </div>
                      <div className={Styles.details}>
                        <div className={Styles.name}>
                          <a href="#">John Doe </a>
                        </div>
                        <div className={Styles.time}>
                          <i className={`${Styles.fa} ${Styles["fa-clock-o"]}`}></i> Last online: 5
                          minutes ago
                        </div>
                      </div>
                    </li>
                    <li className={Styles["col-md-6"]}>
                      <div className={Styles.img}>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className={Styles["img-fluid"]}
                          alt=""
                        />
                      </div>
                      <div className={Styles.details}>
                        <div className={Styles.name}>
                          <a href="#">Mila Kunis</a>
                        </div>
                        <div className={`${Styles.time} ${Styles.online}`}>
                          <i className={`${Styles.fa} ${Styles["fa-check-circle"]}`}></i> Online
                        </div>
                      </div>
                    </li>
                    <li className={Styles["col-md-6"]}>
                      <div className={Styles.img}>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className={Styles["img-fluid"]}
                          alt=""
                        />
                      </div>
                      <div className={Styles.details}>
                        <div className={Styles.name}>
                          <a href="#">Ryan Gossling</a>
                        </div>
                        <div className={`${Styles.time} ${Styles.online}`}>
                          <i className={`${Styles.fa} ${Styles["fa-check-circle"]}`}></i> Online
                        </div>
                      </div>
                    </li>
                    <li className={Styles["col-md-6"]}>
                      <div className={Styles.img}>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className={Styles["img-fluid"]}
                          alt=""
                        />
                      </div>
                      <div className={Styles.details}>
                        <div className={Styles.name}>
                          <a href="#">Robert Downey Jr.</a>
                        </div>
                        <div className={Styles.time}>
                          <i className={`${Styles.fa} ${Styles["fa-clock-o"]}`}></i> Last online:
                          Thursday
                        </div>
                      </div>
                    </li>
                    <li className={Styles["col-md-6"]}>
                      <div className={Styles.img}>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className={Styles["img-fluid"]}
                          alt=""
                        />
                      </div>
                      <div className={Styles.details}>
                        <div className={Styles.name}>
                          <a href="#">Emma Watson</a>
                        </div>
                        <div className={Styles.time}>
                          <i className={`${Styles.fa} ${Styles["fa-clock-o"]}`}></i> Last online: 1 week
                          ago
                        </div>
                      </div>
                    </li>
                    <li className={Styles["col-md-6"]}>
                      <div className={Styles.img}>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className={Styles["img-fluid"]}
                          alt=""
                        />
                      </div>
                      <div className={Styles.details}>
                        <div className={Styles.name}>
                          <a href="#">George Clooney</a>
                        </div>
                        <div className={Styles.time}>
                          <i className={`${Styles.fa} ${Styles["fa-clock-o"]}`}></i> Last online: 1 month
                          ago
                        </div>
                      </div>
                    </li>
                    <li className={Styles["col-md-6"]}>
                      <div className={Styles.img}>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className={Styles["img-fluid"]}
                          alt=""
                        />
                      </div>
                      <div className={Styles.details}>
                        <div className={Styles.name}>
                          <a href="#">Mila Kunis</a>
                        </div>
                        <div className={`${Styles.time} ${Styles.online}`}>
                          <i className={`${Styles.fa} ${Styles["fa-check-circle"]}`}></i> Online
                        </div>
                      </div>
                    </li>
                    <li className={Styles["col-md-6"]}>
                      <div className={Styles.img}>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className={Styles["img-fluid"]}
                          alt=""
                        />
                      </div>
                      <div className={Styles.details}>
                        <div className={Styles.name}>
                          <a href="#">Ryan Gossling</a>
                        </div>
                        <div className={`${Styles.time} ${Styles.online}`}>
                          <i className={`${Styles.fa} ${Styles["fa-check-circle"]}`}></i> Online
                        </div>
                      </div>
                    </li>
                  </ul>
                  <br />
                  <div id={Styles.btnUser} className={Styles["me-3"]}>
                    <a href="#" className={`${Styles.btn} ${Styles[btn-success]} ${Styles[mb-3]}`}>
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
