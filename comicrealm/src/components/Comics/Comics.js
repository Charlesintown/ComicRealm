import React, {useState, useEffect} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {Container, Row, Col, Image, Card, Button, Dropdown, DropdownButton, Modal} from 'react-bootstrap';
import comicDB from "../../comicsDB";

const coverPaths = process.env.PUBLIC_URL + '/covers/';


const Comics = () => {

    const batmanCover = comicDB.batman;
    const supermanCover = comicDB.superman;
    const wonderWomanCover = comicDB.wonderwoman;
    const harleyQuinnCover = comicDB.harleyquinn;
    const batGirlCover = comicDB.batgirl;
    const jokerCover = comicDB.joker;
    const allCovers = [batmanCover, supermanCover, wonderWomanCover, harleyQuinnCover, batGirlCover, jokerCover];

    const[covers, setCovers] = useState(allCovers);
    const[likeTitle, setLikeTitle] = useState(0);
    const[likedArray, setLikedArray] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showCovers = (allHeroes) => {
      return allHeroes.map(hero => {
          return (
              hero.map(el => {
                  return (
                      <Card style={{ width: '13rem', display: "inline-block", marginBottom: "2rem", marginTop: "2rem"}}>
                          <Card.Img variant="top" src={`${coverPaths + el.cover}`} />
                          <Card.Body>
                              <Card.Title style={{fontSize: "1rem", height: "3rem"}}>{el.title}</Card.Title>
                              {/*<Card.Text style={{fontSize: "1rem"}}>*/}
                              {/*    {el.description}*/}
                              {/*</Card.Text>*/}
                              <Button onClick={likeIt} variant="primary"><i className="far fa-heart"></i> I want it!</Button>
                          </Card.Body>
                      </Card>
                  )
              })
          )
      })
    };

    const showHero = (e) => {
        e.preventDefault();
        const tempCover = allCovers[e.target.id];
        setCovers(prevState => []);
        setCovers(prevState => [...prevState, tempCover])
    };

    const showAllCovers = (e) => {
        e.preventDefault();
        setCovers(prevState => []);
        setCovers([...allCovers]);
    };

    const likeIt = (e) => {
      setLikeTitle(prevState => prevState + 1);
      const el = e.target.parentElement.firstElementChild;
      setLikedArray(prevState => [...prevState, el.innerHTML]);
    };




  return (
      <Container style={{textAlign: "center"}}>
          <div>
              <div style={{textAlign: "right"}}>
                  <Button variant="primary" onClick={handleShow}>Click to show, what you liked! ({likeTitle})</Button>
                  <Modal show={show} onHide={handleClose} animation={false}>
                      <Modal.Header closeButton>
                          <Modal.Title>Those are titles you like:</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{textAlign: "center"}}>
                          {likedArray.map(el => {
                              return (
                                  <Row>
                                      <Col>{el}</Col>
                                  </Row>
                              )
                          })}
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                              Close
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
                              Save Changes
                          </Button>
                      </Modal.Footer>
                  </Modal>
              </div>
          </div>
          <Row>
              <Col><button id={0} onClick={showHero}>Batman</button></Col>
              <Col><button id={1} onClick={showHero}>Superman</button></Col>
              <Col><Button id={2} onClick={showHero}>Wonder Woman</Button></Col>
              <Col><Button id={3} onClick={showHero}>Harley Quinn</Button></Col>
              <Col><Button id={4} onClick={showHero}>Batgirl</Button></Col>
              <Col><Button id={5} onClick={showHero}>Joker</Button></Col>
              <Col><Button onClick={showAllCovers}>All</Button></Col>
          </Row>
              {showCovers(covers)}




      </Container>
  )
};

export default Comics;