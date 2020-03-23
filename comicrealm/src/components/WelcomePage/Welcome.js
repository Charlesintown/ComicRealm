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
        <Container>
            <Row>
                <Col>
                    <h1>Witaj na stronie żałośniku</h1>
                    <p>Tutaj będziesz mógł przejść do strony</p>
                    <Link to={'/main'}>Let's Start!</Link>
                </Col>
            </Row>
        </Container>
    )
};

export default Welcome;