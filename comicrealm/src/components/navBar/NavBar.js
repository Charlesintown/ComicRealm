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
            <div className={"navBarBg"}>
                <Container>
                    <Row className={"navRow"}>
                        <Col>
                            <Link className={"navLinks brandName"} to={'/main'}><i className="fas fa-book-dead"></i> COMICREALM</Link>
                        </Col>
                        <Col>
                            <Link className={"navLinks comicL"} to={'/comics'}>Comics</Link>
                        </Col>
                        <Col>
                            <Link className={"navLinks"} to={'/news'}>News</Link>
                        </Col>
                        <Col>
                            <Link className={"navLinks"} to={'/about'}>About Me</Link>
                        </Col>
                        <Col>
                            <Link className={"navLinks"} to={'/contact'}>Contact</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
};

export default NavBar;