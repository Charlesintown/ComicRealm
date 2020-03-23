import React from 'react';
import { Container, Row,  Col} from 'react-bootstrap'

const NavBar = () => {
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col>BrandName</Col>
                        <Col>Comics</Col>
                        <Col>News</Col>
                        <Col>About me</Col>
                        <Col>Contact</Col>
                    </Row>
                </Container>
            </div>
        </>
    )
};

export default NavBar;