import React from 'react'
import { Container, Nav, Button, Image, Row, Col, Navbar} from 'react-bootstrap'
import logo from './Images/FAHR_BOX_white.png'

function UserNav() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="justify-content-between">
                <a href='/'>
                    <Image className="nav-image" src={logo} fluid/>
                </a>
                <Nav variant="light">
                    <Nav.Item>
                        <Nav.Link href='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='about'>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='resources'>Resources</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='links'>Links</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}

export default UserNav
