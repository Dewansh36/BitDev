import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../../Public/css/SelectPage.css'
import SelectPageImage from '../../Public/image/SelectPageImage.png'
import Loading from '../loading';
import Navbar from '../navbar/navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Select() {

    const [loading, setLoading]=useState(true);
    const [curUser, setUser]=useState({});

    const navigate=useNavigate();

    const notify=(message, type) => toast(`${message}`, { type: type });

    useEffect(() => {
        axios.get('http://localhost:4000/getUser', { withCredentials: true })
            .then((response) => {
                const { error, success, user }=response.data;
                console.log(response.data);
                if (!user) {
                    notify(error, "error");
                    navigate('/login');
                }
                else if (error!=undefined) {
                    notify(error, "error");
                    setLoading(false);
                }
                else {
                    notify("Welcome!", "success");
                    setUser(user);
                    setLoading(false);
                }
            })

    }, [])
    if (loading==true) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            <Navbar user={curUser} />
            <ToastContainer position='top-center' />
            <div className="main">
                <Container>
                    <Row>
                        <Col lg={6} md={12} className="separate">
                            <h1 className="fix SelectH1">Today is a great day to CODE.</h1>
                            <div className="maincontainer card1">
                                <div className="thecard">
                                    <div className="thefront"><div className="SelectH1 cardH1">For Developers</div>
                                    </div>
                                    <div className="theback"><p className="SelectP">Upload projects and check out others projects, make friends working in same domain.</p>
                                        <span className="SelectButton"><a href="#"></a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="maincontainer card2">
                                <div className="thecard">
                                    <div className="thefront"><div className="SelectH1 cardH1">CP Enthusiasts</div>
                                    </div>
                                    <div className="theback"><p className="SelectP">Get all the data about CP and get recommended problems based on your rating .</p>
                                        <span className="SelectButton"><a href="#"></a></span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <img src={SelectPageImage} alt="iphone-mockup" className="title-img" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Select