import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import { Container, Row,  Col} from 'react-bootstrap';


const Footer = () => {
    return (
        <div className={"footerBg"}>
            <Container>
                <Row>
                    <Col>
                        <h4><i className="fas fa-book-dead"></i> COMICREALM</h4>
                    </Col>
                    <Col className={"footerLink"}>
                        <Link className={"welcomeLink"} to={'/'}>Back to Welcome Page <i className="fas fa-angle-double-right"></i></Link>
                    </Col>
                </Row>
            </Container>
        </div>

    )
};

export default Footer;