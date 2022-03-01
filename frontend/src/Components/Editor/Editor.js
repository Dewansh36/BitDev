import React, { Fragment } from 'react';
import Styles from './Editor.css'

const Post = () => {
  return <Fragment>
      <section id={Styles.hero} className={Styles["mt-3"]}>
            <div className={Styles["container-xl"]}>
                <div className={`${Styles.row} ${Styles["gy-4"]}`}>
                    <div className={Styles["col-lg-8"]}>

                        <div className={`${Styles.post} ${Styles["featured-post-lg"]}`}>
                            <div className={`${Styles.details} ${Styles.clearfix}`}>
                                <a href="#" className={Styles["category-badge"]}>AI</a>
                                <h2 className={Styles["post-title"]}>
                                    <a href="#">Artifical Intelligence</a>
                                </h2>
                                <ul className={`${Styles.meta} ${Styles["list-inline"]} ${Styles["mb-0"]}`}>
                                    <li className={Styles["list-inline-item"]}>
                                        <a href="#">Linken Vashistha</a>
                                    </li>
                                    <li className={Styles["list-inline-item"]}>23 Jan 2022</li>
                                </ul>
                            </div>
                            <a href="#">
                                <div className={`${Styles.thumb} ${Styles.rounded}`}>
                                    <div className={`${Styles.inner} ${Styles["data-bg-image"]}`} id={Styles.bgImg}>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={Styles["col-lg-4"]}>
                        <div className={`${Styles["post-tabs"]} ${Styles.rounded}`}>
                            <ul className={`${Styles.nav} ${Styles["nav-tabs"]} ${Styles["nav-pills"]} ${Styles["nav-fill"]}`} id={Styles.postTab} role="tablist">
                                <li className={Styles["nav-item"]} role="presentation">
                                    <button aria-controls="popular" aria-selected="true" className={`${Styles.active} ${Styles["nav-link"]}`}
                                        data-bs-target="#popular" data-bs-toggle="tab" id={Styles["popular-tab"]} role="tab"
                                        type="button">
                                        Popular
                                    </button>
                                </li>
                                <li className={Styles["nav-item"]} role="presentation">
                                    <button aria-controls="recent" aria-selected="false" className={Styles["nav-link"]}
                                        data-bs-target="#recent" data-bs-toggle="tab" id={Styles["recent-tab"]} role="tab"
                                        type="button">
                                        Recent
                                    </button>
                                </li>

                            </ul>

                            <div className={Styles["tab-content"]} id={Styles["postsTabContent"]}>
                                <div className={Styles["lds-dual-ring"]}></div>

                                <div className={`${Styles["tab-pane"]} ${Styles.fade} ${Styles.show} ${Styles.active}`} id={Styles.popular} aria-labelledby="popular-tab"
                                    role="tabpanel">
                                    <div className={`${Styles.post} ${Styles.square} ${Styles["post-list-sm"]}`}>
                                        <div className={`${Styles.thumb} ${Styles.rounded}`}>
                                            <a href="#">
                                                <div className={Styles.inner}>
                                                    <img className={Styles["img-fluid'} src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className={` ${Styles.details} ${Styles.clearfix} `}>
                                            <h6 className="post-title my-0">
                                                <a href="#">
                                                    2 Policemen saved life like a hero
                                                </a>
                                            </h6>
                                            <ul className="meta list-inline mt-1 mb-0">
                                                <li className="list-inline-item">23 Jan 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post post-list-sm square">
                                        <div className="thumb rounded">
                                            <a href="#">
                                                <div className="inner">
                                                    <img className='img-fluid' src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="details clearfix">
                                            <h6 className="post-title my-0">
                                                <a href="#">
                                                    3 ways to remove dark spots naturally
                                                </a>
                                            </h6>
                                            <ul className="meta list-inline mt-1 mb-0">
                                                <li className="list-inline-item">23 Jan 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post post-list-sm square">
                                        <div className="thumb rounded">
                                            <a href="#">
                                                <div className="inner">
                                                    <img className='img-fluid' src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="details clearfix">
                                            <h6 className="post-title my-0">
                                                <a href="#">
                                                    Top 10 Interior designers for your dream home.
                                                </a>
                                            </h6>
                                            <ul className="meta list-inline mt-1 mb-0">
                                                <li className="list-inline-item">23 Jan 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post post-list-sm square">
                                        <div className="thumb rounded">
                                            <a href="#">
                                                <div className="inner">
                                                    <img className='img-fluid' src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="details clearfix">
                                            <h6 className="post-title my-0">
                                                <a href="#">
                                                    Learn how to make desert at home.
                                                </a>
                                            </h6>
                                            <ul className="meta list-inline mt-1 mb-0">
                                                <li className="list-inline-item">23 Jan 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="recent" aria-labelledby="recent-tab" role="tabpanel">
                                    <div className="post post-list-sm square">
                                        <div className="thumb rounded">
                                            <a href="#">
                                                <div className="inner">
                                                    <img className='img-fluid' src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="details clearfix">
                                            <h6 className="post-title my-0">
                                                <a href="#">
                                                    2 Policemen saved life like a hero
                                                </a>
                                            </h6>
                                            <ul className="meta list-inline mt-1 mb-0">
                                                <li className="list-inline-item">23 Jan 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post post-list-sm square">
                                        <div className="thumb rounded">
                                            <a href="#">
                                                <div className="inner">
                                                    <img className='img-fluid' src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="details clearfix">
                                            <h6 className="post-title my-0">
                                                <a href="#">
                                                    3 ways to remove dark spots naturally
                                                </a>
                                            </h6>
                                            <ul className="meta list-inline mt-1 mb-0">
                                                <li className="list-inline-item">23 Jan 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post post-list-sm square">
                                        <div className="thumb rounded">
                                            <a href="#">
                                                <div className="inner">
                                                    <img className='img-fluid' src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="details clearfix">
                                            <h6 className="post-title my-0">
                                                <a href="#">
                                                    Top 10 Interior designers for your dream home.
                                                </a>
                                            </h6>
                                            <ul className="meta list-inline mt-1 mb-0">
                                                <li className="list-inline-item">23 Jan 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post post-list-sm square">
                                        <div className="thumb rounded">
                                            <a href="#">
                                                <div className="inner">
                                                    <img className='img-fluid' src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="details clearfix">
                                            <h6 className="post-title my-0">
                                                <a href="#">
                                                    Learn how to make desert at home.
                                                </a>
                                            </h6>
                                            <ul className="meta list-inline mt-1 mb-0">
                                                <li className="list-inline-item">23 Jan 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
        <div className="container-xl">
        <div className="row">
            <div className="col">
                        <div className="section-header my-3">
                            <h3 className="section-title">Editor's Pick</h3>
                        </div>

                        <div className="padding-20 rounded bordered">
                            <div className="row gy-5">
                                <div className="col-lg-8 col-sm-6">
                                    <div className="post">
                                        <div className="thumb rounded">
                                            <a href="#" className="category-badge position-absolute">Lifestyle</a>
                                            <span className="post-format">
                                            <i className="fas fa-image"></i>
                                            </span>
                                            <a href="#">
                                                <div className="inner">
                                                    <img className='img-fluid' src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <ul className="meta list-inline mt-4 mb-0">
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    Linken Vashistha
                                                </a>
                                            </li>
                                            <li className="list-inline-item">23 Jan 2022</li>
                                        </ul>
                                        <h5 className="post-title mb-3 mt-3">
                                            <a href="#">Artifical Intelligence</a>
                                        </h5>
                                        <p className="excerpt mb-0">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
                                            quasi.

                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="post post-list-sm square">
                                        <div className="thumb rounded">
                                            <a href="#">
                                                <div className="inner">
                                                    <img className='img-fluid' src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="details clearfix">
                                            <h6 className="post-title my-0">
                                                <a href="#">
                                                    2 Policemen saved life like a hero
                                                </a>
                                            </h6>
                                            <ul className="meta list-inline mt-1 mb-0">
                                                <li className="list-inline-item">23 Jan 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post post-list-sm square">
                                        <div className="thumb rounded">
                                            <a href="#">
                                                <div className="inner">
                                                    <img className='img-fluid' src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="details clearfix">
                                            <h6 className="post-title my-0">
                                                <a href="#">
                                                    3 ways to remove dark spots naturally
                                                </a>
                                            </h6>
                                            <ul className="meta list-inline mt-1 mb-0">
                                                <li className="list-inline-item">23 Jan 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post post-list-sm square">
                                        <div className="thumb rounded">
                                            <a href="#">
                                                <div className="inner">
                                                    <img className='img-fluid' src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="details clearfix">
                                            <h6 className="post-title my-0">
                                                <a href="#">
                                                    Top 10 Interior designers for your dream home.
                                                </a>
                                            </h6>
                                            <ul className="meta list-inline mt-1 mb-0">
                                                <li className="list-inline-item">23 Jan 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post post-list-sm square">
                                        <div className="thumb rounded">
                                            <a href="#">
                                                <div className="inner">
                                                    <img className='img-fluid' src="https://ebsedu.org/wp-content/uploads/2020/06/AI-CAREER.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="details clearfix">
                                            <h6 className="post-title my-0">
                                                <a href="#">
                                                    Learn how to make desert at home.
                                                </a>
                                            </h6>
                                            <ul className="meta list-inline mt-1 mb-0">
                                                <li className="list-inline-item">23 Jan 2022</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
        </div>
        </div>
        </div>
        <div className="container-xl mb-5">
            <div className="section-header">
                <h3 className="section-title">Latest Posts</h3>
            </div>
            <div className="row">
                <div className='col rounded bordered'>
                    <div className="card1 my-4">
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
                    <div className="card1 my-4">
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
                    <div className="card1 my-4">
                    <div className="image-data">
                      <div className="background-image"></div>
                      <div className="user-details">
                        <a href="#" className={Styles.author}>
                          <i className="fas fa-user"></i>Linken Vashistha
                        </a>
                        <span className={Styles.date}>
                          <i className="fas fa-calendar-day"></i>Jan 18,2021
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
                    <div className="card1 my-4">
                    <div className={Styles["image-data"]}>
                      <div className={Styles["background-image"]}></div>
                      <div className={Styles["user-details"]}>
                        <a href="#" className={Styles.author}>
                          <i className="fas fa-user"></i>Linken Vashistha
                        </a>
                        <span className={Styles.date}>
                          <i className="fas fa-calendar-day"></i>Jan 18,2021
                        </span>
                      </div>
                    </div>
                    <div className={Styles["post-data"]}>
                      <h3 className={Styles["title"]}>Artifical Intelligence</h3>
                      <p className={Styles["description"]}>
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
            </div>
        </div>
  </Fragment>;
};

export default Post;
