import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import { Container, Row,  Col} from 'react-bootstrap';
import comicDB from "../../comicsDB";


const Comics = () => {



  return (
      <Container>
          <Row>
              <Col>Tu będą karty z komiksami</Col>
              <Col>Tu będą karty z komiksami</Col>
              <Col>Tu będą karty z komiksami</Col>
          </Row>
      </Container>
  )
};

export default Comics;