import React from 'react';
import { Container, Row,  Col} from 'react-bootstrap';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Link to={'/main'}>BrandName</Link>
                        </Col>
                        <Col>
                            <Link to={'/comics'}>Comics</Link>
                        </Col>
                        <Col>
                            <Link to={'/news'}>News</Link>
                        </Col>
                        <Col>
                            <Link to={'/about'}>About Me</Link>
                        </Col>
                        <Col>
                            <Link to={'/contact'}>Contact</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
};

export default NavBar;