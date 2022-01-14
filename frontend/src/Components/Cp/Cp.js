import React, { useState, useEffect } from 'react'
import ccImage from '../../Public/image/cc.png'
import cfImage from '../../Public/image/cf.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Public/css/CP.css'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

function Cp() {
    const dfkls=1;
    const [cfdata, setcfData]=useState({});
    useEffect(async () => {
        console.log('Called!');
        const response=await (await axios.get('https://competitive-programming-score.herokuapp.com/api/codeforces/Dewansh05')).data;
        setcfData(response);
        console.log(cfdata);
    }, [])
    const [cpdata, setcpData]=useState({});
    useEffect(async () => {
        const response=await (await axios.get('https://competitive-programming-score.herokuapp.com/api/codechef/dewansh_36')).data;
        setcpData(response);
        console.log(cpdata);
    }, [])
    return (
        <div>
            <section id="stats">
                <Container>
                    <Row>
                        <Col lg={6} md={12} className='stats'>
                            <h1 className="heading">CP Stats</h1>
                            <div className="cf">
                                <img className="logo_pic" src={cfImage} alt="codeforces" />
                                <p>
                                    <h2>Codeforces</h2>
                                    <h3 className="resFix">Handle {cfdata.username} <span id="cfhandle"></span></h3>
                                    <h3 className="resFix">Current rating  {cfdata.rating} <span id="cfrating"></span> </h3>
                                    <h3 className="resFix">Current rank -{cfdata.rank} <span id="cfcrank"></span></h3>
                                    <h3 className="resFix">Max rating - {cfdata["max rating"]}<span id="cfmrating"></span></h3>
                                </p>
                            </div>
                            <img className="logo_pic" src={ccImage} alt="codechef" />
                            <p>
                                <h2>Codechef</h2>
                                <h3 className="resFix">Handle   <span id="cchandle"></span></h3>
                                <h3 className="resFix">Current rating - <span id="ccrating"></span></h3>
                                <h3 className="resFix">Current rank - <span id="cccrank"></span></h3>
                                <h3 className="resFix">Max rating - <span id="ccmrating"></span></h3>
                            </p>
                        </Col>
                        <Col lg={6} md={12} className='left-border'>
                            <div className="bottom-border">
                                <h1 className="heading2">Upcoming Contests</h1>
                                <a href="" id="ac1" target="_blank"><h3 id="c1">Contest 1</h3></a>
                                <h4 id="Time1" className="time">Time 1</h4>
                                <a href="" id="ac2" target="_blank"><h3 id="c2">Contest 2</h3></a>
                                <h4 id="Time2" className="time">Time 2</h4>
                                <a href="" id="ac3" target="_blank"><h3 id="c3">Contest 3</h3></a>
                                <h4 id="Time3" className="time">Time 3</h4>
                            </div>
                            <h1 className="heading3">Recommended Problems</h1>
                            <a href="" id="ap1" target="_blank"><h3 id="p1">Problem 1</h3></a>
                            <a href="" id="ap2" target="_blank"><h3 id="p2">Problem 2</h3></a>
                            <a href="" id="ap3" target="_blank"><h3 id="p3">Problem 3</h3></a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Cp
