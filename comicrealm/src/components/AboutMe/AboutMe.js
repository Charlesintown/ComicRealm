import React from 'react';
import { Container, Row,  Col} from 'react-bootstrap';


const AboutMe = () => {


    return (
        <Container className={"containerBox"}>
            <Row className={"aboutSection"}>
                <Col xs={4}>
                    <div className={"photoSide"}>

                    </div>
                </Col>
                <Col xs={8}>
                    <div className={"aboutSide"}>
                        <h1>So, who am I?</h1>
                        <p>
                            My name is Charles.
                            <br/>Long story short, I love to read, I love drawings,
                            I love fantasy.
                            <br/>I'm a big enthusiast of comic books overall.
                            Especially I'm a huge fan of DC Comics and that was my inspiration to build <span>COMICREALM</span> - small DC Universe web catalog.
                        </p>
                        <p>
                            Web Development is like a comic book. It's full of rows, columns, colors and images.
                            It brings joy, excitement, sometimes confusion.
                            <br/><span className={"aboutQuestion"}>How not to love those?</span>
                        </p>
                    </div>
                </Col>
            </Row>

        </Container>

)
};

export default AboutMe;