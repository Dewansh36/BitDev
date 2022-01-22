import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap'
import '../../Public/css/SelectPage.css'
import SelectPageImage from '../../Public/image/SelectPageImage.png'

function Select() {
    return (
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
    )
}

export default Select