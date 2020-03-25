import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import { Container, Row,  Col} from 'react-bootstrap';


const MainPage = () => {
    return (
        <Container>
            <div className={"landingSection"}>
                <Row>
                    <Col>
                        <h1>WHAT DO YOU WANT TO VISIT ?</h1>
                    </Col>
                </Row>
                <Row className={"landingRow landRow1"}>
                    <Col xs={2}><h2>COMICS</h2></Col>
                    <Col xs={8}></Col>
                    <Col xs={2} className={"linkCol"}><Link className={"mainLinks"} to={'/comics'}>GO! <i className="fas fa-angle-double-right"></i></Link></Col>
                </Row>
                <Row className={"landingRow landRow2"}>
                    <Col xs={2}><h2>NEWS</h2></Col>
                    <Col xs={8}></Col>
                    <Col xs={2} className={"linkCol"}><Link className={"mainLinks"} to={'/news'}>GO! <i className="fas fa-angle-double-right"></i></Link></Col>
                </Row>
                <Row className={"landingRow landRow3"}>
                    <Col xs={2}><h2>ABOUT ME</h2></Col>
                    <Col xs={8}></Col>
                    <Col xs={2} className={"linkCol"}><Link className={"mainLinks"} to={'/about'}>GO! <i className="fas fa-angle-double-right"></i></Link></Col>
                </Row>
                <Row className={"landingRow landRow4"}>
                    <Col xs={2}><h2>CONTACT</h2></Col>
                    <Col xs={8}></Col>
                    <Col xs={2} className={"linkCol"}><Link className={"mainLinks"} to={'/contact'}>GO! <i className="fas fa-angle-double-right"></i></Link></Col>
                </Row>
            </div>
        </Container>
    )
};

export default MainPage;