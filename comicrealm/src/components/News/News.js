import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import { Container, Row, Col, Jumbotron, Button, Card} from 'react-bootstrap';


const News = () => {


  return (
      <Container>
          <Jumbotron>
              <h1>Tu będzie tytuł newsa</h1>
              <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
              </p>
              <p>
                  <Button variant="primary">Learn more</Button>
              </p>
          </Jumbotron>
          <Row>
              <Col><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card></Col>
              <Col><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card></Col>
              <Col><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card></Col>
          </Row>
            <Row>
              <Col><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card></Col>
              <Col><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card></Col>
              <Col><Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card></Col>
          </Row>
      </Container>




  )
};

export default News;