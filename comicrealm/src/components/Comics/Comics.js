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

    const comicL = document.querySelector(".comicL");

    const showCovers = (allHeroes) => {
      return allHeroes.map(hero => {
          return (
              hero.map(el => {
                  return (
                      <Card className={"cardComic"}>
                          <Card.Img variant="top" src={`${coverPaths + el.cover}`} />
                          <Card.Body>
                              <Card.Title className={"cardComicTitle"}>{el.title}</Card.Title>
                              {/*<Card.Text style={{fontSize: "1rem"}}>*/}
                              {/*    {el.description}*/}
                              {/*</Card.Text>*/}
                              <Button className={"comicButton"} onClick={likeIt} variant="primary"><i className="far fa-heart"></i> I want it!</Button>
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
          <div className={"avatarButtons"}>
              <div className={"batAvatar"} id={0} onClick={showHero}> </div>
              <div className={"batAvatar"} id={1} onClick={showHero}> </div>
              <div className={"batAvatar"} id={2} onClick={showHero}>  </div>
              <div className={"batAvatar"} id={3} onClick={showHero}> </div>
              <div className={"batAvatar"} id={4} onClick={showHero}> </div>
              <div className={"batAvatar"} id={5} onClick={showHero}> </div>
              <div className={"batAvatar"} onClick={showAllCovers}> </div>
          </div>
              {showCovers(covers)}




      </Container>
  )
};

export default Comics;