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
            <Row>
                <Col>
                    <h1>Co będziesz dalej robił, tu będzie punk startu</h1>
                </Col>
            </Row>
            <Row>
                    <Col>Tu będzie sekcja do komiksów</Col>
                    <Col>Tu będzie jakiś obrazek mały</Col>
                    <Col><Link to={'/comics'}>komiksy</Link></Col>
            </Row>
            <Row>
                <Col>Tu będzie sekcja do newsów</Col>
                <Col>Tu będzie jakiś obrazek mały</Col>
                <Col><Link to={'/news'}>news</Link></Col>
            </Row>
            <Row>
                <Col>Tu będzie sekcja do about</Col>
                <Col>Tu będzie jakiś obrazek mały</Col>
                <Col><Link to={'/about'}>o mnie</Link></Col>
            </Row>
            <Row>
                <Col>Tu będzie sekcja do kontaktu</Col>
                <Col>Tu będzie jakiś obrazek mały</Col>
                <Col><Link to={'/contact'}>kontakt</Link></Col>
            </Row>
        </Container>
    )
};

export default MainPage;