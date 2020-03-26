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
                  <Button className={"likedItemsBtn"} variant="primary" onClick={handleShow}>Click to show, what you liked! ({likeTitle})</Button>
                  <Modal  show={show} onHide={handleClose} animation={false}>
                      <div className={"modalBox"}>
                          <Modal.Header closeButton>
                              <Modal.Title>THOSE ARE TITLES YOU LIKED:</Modal.Title>
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
                              <Button className={"closeModalBtn"} variant="secondary" onClick={handleClose}>
                                  Close
                              </Button>
                          </Modal.Footer>
                      </div>
                  </Modal>
              </div>
          </div>
          <div className={"avatarButtons"}>
              <div className={"heroBox"}>
                  <div className={"batAvatar"} id={0} onClick={showHero}> </div>
                  <h4 className={"heroName"}>BATMAN</h4>
              </div>
              <div className={"heroBox"}>
                  <div className={"superAvatar"} id={1} onClick={showHero}> </div>
                  <h4 className={"heroName"}>SUPERMAN</h4>
              </div>
              <div className={"heroBox"}>
                  <div className={"wonderAvatar"} id={2} onClick={showHero}>  </div>
                  <h4 className={"heroName"}>WONDER WOMAN</h4>
              </div>
              <div className={"heroBox"}>
                  <div className={"harleyAvatar"} id={3} onClick={showHero}> </div>
                  <h4 className={"heroName"}>HARLEY QUINN</h4>
              </div>
              <div className={"heroBox"}>
                  <div className={"batgirlAvatar"} id={4} onClick={showHero}> </div>
                  <h4 className={"heroName"}>BATGIRL</h4>
              </div>
              <div className={"heroBox"}>
                  <div className={"jokerAvatar"} id={5} onClick={showHero}> </div>
                  <h4 className={"heroName"}>JOKER</h4>
              </div>
              <div className={"heroBox"}>
                  <div className={"allAvatar"} onClick={showAllCovers}> </div>
                  <h4 className={"heroName"}>ALL</h4>
              </div>
          </div>

          {showCovers(covers)}




      </Container>
  )
};

export default Comics;