import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import CarouselFirstImg from '../../images/carousel01.jpg';
import CarouselSecondImg from '../../images/carousel02.jpg';
import CarouselThirdImg from '../../images/carousel03.jpg';
import CarouselForthImg from '../../images/carousel04.jpg';
import CarouselFifthImg from '../../images/carousel05.jpg';
import CarouselSixthImg from "../../images/carousel06.jpg";
import "./style.css";

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(Cookies.get("loggedInModal") === 'open'? true : false);
        if(Cookies.get("loggedInModal") === 'open'){
            setTimeout(() => {
                Cookies.set("loggedInModal", 'close');
                setShowModal(false);
            }, 2200);
        }
    }, []);

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

            <Modal show={showModal} backdrop="static" keyboard={false} centered className="confirmationModal" dialogClassName="confirm">
                <Modal.Body className="tickContainer">
                    <div className="tick">
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
				            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> 
				            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
			            </svg>
                    </div>
                    <h3>Successfully LoggedIn !!</h3>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Home;