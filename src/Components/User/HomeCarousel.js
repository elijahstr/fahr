import React, {useState, useEffect} from 'react'
import { Carousel, Container, Image} from 'react-bootstrap'
import AboutImage from './Images/child.jpg'
import ClassImage from './Images/classroom.jpg'

function HomeCarousel() {
    return (
        <div>
            <Container fluid>
                <Carousel>
                    <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        src={ClassImage}
                        alt="Welcome To FAHR!"
                        />
                    <Carousel.Caption>
                        <Container style={{background: '#343A40'}}>
                        <h3>Welcome To FAHR!</h3>
                        <p>Established in 2021, we are here to help you.</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={AboutImage}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Container style={{background: '#343A40'}}>
                        <a href='/about' style={{color: 'white'}}>
                        <h3>About Us</h3>
                        <p>Learn more about what we do and why we do it by reading our mission statement.</p>
                        </a>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <Container style={{background: '#343A40'}}>
                    <a href='/links' style={{color: 'white'}}>
                        <h3>Links</h3>
                        <p>Check out some of our favorite books and articles.</p>
                    </a>
                    </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Container>
        </div>
    )
}

export default HomeCarousel

