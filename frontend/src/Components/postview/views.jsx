import React from "react";
import '../../Public/css/view.css';
import img1 from '../../Public/image/cc.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
function Views() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <article className="blog-card">
                            <div className="blog-card__background">
                                <div className="card__background--wrapper">
                                    {/* <div className="card__background--main">
                                        
                                        <div className="card__background--layer"></div>
                                    </div> */}
                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src={img1} class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                                <img src={img1} class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                                <img src={img1} class="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-card__head">
                                <span className="date__box">
                                    <span className="date__day">11</span>
                                    <span className="date__month">JAN</span>
                                </span>
                            </div>
                            <div className="blog-card__info">
                                <h5>HARVICK GETS WHAT HE NEEDS, JOHNSON AMONG THOSE</h5>
                                <p>
                                    <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i> Tony Jahson</a>
                                    <a href="#" className="icon-link mr-3 ms-2"><svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg> 100</a>
                                    <a href="#" className="icon-link"><i className="fa fa-comments-o ms-2"></i> 150</a>
                                </p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero libero voluptatibus earum? Alias dignissimos quo cum, nulla esse facere atque, blanditiis doloribus at sunt quas, repellendus vel? Et, hic!</p>
                                <a href="#" className="btn btn--with-icon px-3">
                                    <svg className="m-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>    Like</a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <section className="detail-page">
                <div className="container mt-5">

                </div>
            </section>
            {/* comments  */}
            <div class="container mt-5 mb-5">
                <div class="d-flex justify-content-center row">
                    <div class="d-flex flex-column col-md-12">
                        <div class="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
                            <div class="profile-image"><img class="rounded-circle m-3" src="https://i.imgur.com/t9toMAQ.jpg" width="70" /></div>
                            <div class="d-flex flex-column-reverse flex-grow-0 align-items-center votings ml-1"><i class="fa fa-sort-up fa-2x hit-voting mx-3"></i><span>127</span><i class="fa fa-sort-down fa-2x hit-voting"></i></div>
                            <div class="d-flex flex-column ml-3">
                                <div class="d-flex flex-row post-title">
                                    <h5>Is sketch 3.9.1 stable?</h5><span class="ml-2">(Jesshead)</span>
                                </div>
                                <div class="d-flex flex-row align-items-center align-content-center post-title"><span class="mr-2 comments mx-3">13 comments&nbsp;</span><span class="mr-2 dot me-3"></span><span>6 hours ago</span></div>
                            </div>
                        </div>
                        <div class="coment-bottom bg-white p-2 px-4">
                            <div class="d-flex flex-row add-comment-section mt-4 mb-4"><img class="img-fluid img-responsive rounded-circle mx-3" src="https://i.imgur.com/qdiP4DB.jpg" width="50" /><input type="text" class="form-control mr-3" placeholder="Add comment" /><button class="btn btn-primary px-3 pe-5 ms-2" type="button">Comment</button></div>
                            <div class="commented-section mt-2">
                                <div class="d-flex flex-row align-items-center commented-user">
                                    <h5 class="mr-2">Corey oates</h5><span class="dot mb-1 mx-3"></span><span class="mb-1 ml-2 mx-3">4 hours ago</span>
                                </div>
                                <div class="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                <div class="reply-section">
                                    <div class="d-flex flex-row align-items-center voting-icons"><i class="fa fa-sort-up fa-2x mt-3 hit-voting mx-3"></i><i class="fa fa-sort-down fa-2x mb-3 hit-voting "></i><span class="ml-2 mx-3">10</span><span class="dot ml-2 me-3"></span>
                                        <h6 class="ml-2 mt-1">Reply</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Views


