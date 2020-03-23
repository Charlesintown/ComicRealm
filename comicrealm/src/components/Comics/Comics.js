import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {Container, Row, Col, Image} from 'react-bootstrap';
import comicDB from "../../comicsDB";


const Comics = () => {

    console.log(comicDB.batman[0].cover);

  return (
      <Container>
          <Row>
              <Col>sadsad</Col>
              <Col>Tu będą karty z komiksami</Col>
              <Col>Tu będą karty z komiksami </Col>
          </Row>
      </Container>
  )
};

export default Comics;