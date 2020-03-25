import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import { Container, Row, Col, Jumbotron, Button, Card} from 'react-bootstrap';
import jumbotronStyle from "./styles";
import newsDB from "../../newsDB";

const newsPaths = process.env.PUBLIC_URL + '/news/';


const News = () => {


    const allNews = newsDB.news;

    const showAllNews = (news) => {
    return news.map(el => {
        return ( <Col><Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${newsPaths + el.cover}`} />
                <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text>
                        {el.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card></Col>
        )
    })

    };


  return (
      <Container>
          <Jumbotron style={jumbotronStyle}>
              <h1 className={"jumboHeader"}>Tu będzie tytuł newsa</h1>
              <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
              </p>
              <p>
                  <Button variant="primary">Learn more</Button>
              </p>
          </Jumbotron>
          <Row>
              {showAllNews(allNews)}
          </Row>
      </Container>
  )
};

export default News;