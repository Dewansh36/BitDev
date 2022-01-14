import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import '../../Public/css/home.css'
import logo from '../../Public/image/Picture1.png'
import back from '../../Public/image/background.jpg'

function Home() {
    return (
        <div>
            <div class="pace  pace-inactive">
                <div class="pace-progress" data-progress-text="100%" data-progress="99" style="width: 100%;">
                    <div class="pace-progress-inner"></div>
                </div>
                <div class="pace-activity"></div>
            </div>
            <div class="top-left z-index-1 padding-30">
                <img src={logo} width="350" height="175" data-src-retina="assets/image/logo_2x.png" alt="" />
            </div>
            <div class="top-right z-index-10 padding-40">
                <a href="/register"><button class="btn btn-success btn-rounded pull-right mx-auto">Signup</button></a>
                <a href="/login"><button class="btn text-success btn-rounded hover-shadow ripple shadow-lg "
                    style="position: relative; right: 10px;">Login </button></a>
            </div>
            <section class="jumbotron full-height relative z-index-0" data-pages-bg-image={back}
                data-bg-overlay="black" data-overlay-opacity="0.4"
                style="background-image: url(&quot;/image/background.jpg&quot;);">
                <div class="container-xs-height full-height">
                    <div class="col-xs-height col-middle text-left">
                        <div class="content-layer">
                            <div class="inner full-height">
                                <div class="container-xs-height full-height">
                                    <div class="col-xs-height col-middle text-center">
                                        <div class="container">
                                            <div style="top: 180px;position: relative;">
                                                <div class="col-md-6 col-md-offset-3">
                                                    <h1 class="light text-white m-t-5 demo_relative_heading sm-no-padding hidden-xs"
                                                        data-swiper-parallax="-15%">
                                                        <span class="font-montserrat">BitDev</span><br />
                                                        tagline here
                                                    </h1>
                                                    <h2 class="light text-white m-t-5 demo_relative_heading sm-no-padding visible-xs"
                                                        data-swiper-parallax="-15%">
                                                        <span class="font-montserrat ">BitDev</span><br />
                                                        tagline here
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-overlay" style="background-color: rgb(255, 255, 255); opacity: 0.4;"></div>
            </section>
        </div>
    )
}

export default Home
