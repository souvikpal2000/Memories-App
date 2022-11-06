import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import CarouselFirstImg from '../../images/carousel01.jpg';
import CarouselSecondImg from '../../images/carousel02.jpg';
import CarouselThirdImg from '../../images/carousel03.jpg';
import CarouselForthImg from '../../images/carousel04.jpg';
import CarouselFifthImg from '../../images/carousel05.jpg';
import CarouselSixthImg from "../../images/carousel06.jpg";
import "./style.css";

const Home = () => {
    return(
        <>  
            <Container className="homeContainer">
                <Row>
                    <Col md={6} xs={12} className="main-header-left">
                        <p>Things End,</p>
                        <p>But Memories Last Forever💖</p>
                        <h1>Some memories are <span className="textColor">unforgettable</span>, remaining ever <span className="textColor">vivid</span> and <span className="textColor">heartwarming!</span></h1>
                        <a href="/download"><button>View Post</button></a>
                    </Col>
                    <Col md={6} xs={12} className="main-header-right">
                        <Carousel slide={false}>
                            <Carousel.Item>
                                <img className="d-block w-100" src={CarouselFirstImg} alt="First slide"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={CarouselSecondImg} alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={CarouselThirdImg} alt="Third slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={CarouselForthImg} alt="Third slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={CarouselFifthImg} alt="Third slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={CarouselSixthImg} alt="Third slide" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;