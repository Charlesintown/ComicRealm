import React, {useState} from 'react';
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
    const[imgChange, setImgChange] = useState(false);


    const change = (id) => {
        const news = document.querySelectorAll(".newsCard");
        const news2 = [...news];
        news2[id].firstElementChild.style.backgroundImage = `url(${newsPaths + allNews[id].cover})`;
        setImgChange(prevState => true)
    };

    const undoChange = (id) => {
        const news = document.querySelectorAll(".newsCard");
        const news2 = [...news];
        news2[id].firstElementChild.style.backgroundImage = `url(${newsPaths + allNews[id].cover2})`;
        setImgChange(prevState => false)
    };

    const changeBanner = () => {
        const banner = document.querySelector(".jumboNews");
        banner.style.backgroundImage = `url(${newsPaths}bannerCol.jpg)`
    };

    const unChangeBanner = () => {
        const banner = document.querySelector(".jumboNews");
        banner.style.backgroundImage = `url(${newsPaths}bannerBlack.jpg)`
    };

    const showAllNews = (news) => {
    return news.map(el => {
        return ( <Col><Card id={`${el.id}`} onMouseEnter={e => change(`${el.id}`)} onMouseLeave={e => undoChange(`${el.id}`)} className={"newsCard"} style={{ width: '18rem' }}>
                <div id={`${newsPaths + el.id}`} className={"imgNews"} style={{backgroundImage: `url(${newsPaths + el.cover2})`}}> </div>
                <Card.Body>
                    <Card.Title className={"newsTitle"}>{el.title}</Card.Title>
                    <Card.Text className={"newsDescription"}>
                        {el.description}
                    </Card.Text>
                    <Button className={"newsBtn"} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card></Col>
        )
    })
    };


  return (
      <Container>
          <Jumbotron onMouseEnter={changeBanner} onMouseLeave={unChangeBanner} className={"jumboNews"} style={jumbotronStyle}>
              <h1 className={"jumboHeader"}>Harley Quinn Is DC Universe's Best Series</h1>
              <p>
                  DC's Harley Quinn, despite being firmly rooted in self-referential comedy, featured a surprisingly faithful and brilliant version of Batman.
              </p>
              <p>
                  <Button className={"jumboBtn"} variant="primary">More info</Button>
              </p>
          </Jumbotron>
          <Row className={"newsRow"}>
              {showAllNews(allNews)}
          </Row>
      </Container>
  )
};

export default News;