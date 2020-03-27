import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import { Container, Row,  Col} from 'react-bootstrap';


const Welcome = () => {
    return (
        <Container className={"containerBox"}>
            <Row>
                <Col className={"welcomeColumn"}>
                    <h1>WELCOME TO THE <span>COMICREALM</span></h1>
                    <p>..it's a place made of a piece of <span>DC Universe.</span></p>
                </Col>
            </Row>
            <Row>
                <Col className={"imgBox iB1"}></Col>
                <Col className={"imgBox iB2"}></Col>
                <Col className={"imgBox iB3"}></Col>
                <Col className={"imgBox iB4"}></Col>
                <Col className={"imgBox iB5"}></Col>
            </Row>
            <Row>
                <Col className={"enterPageLink"}>
                    <Link to={'/main'}>Let's Begin!</Link>
                </Col>
            </Row>
        </Container>
    )
};

export default Welcome;