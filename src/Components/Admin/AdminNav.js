import React from 'react'
import { Container, Nav, Button, Image, Row, Col, Navbar} from 'react-bootstrap'
import logo from '../User/Images/FAHR_BOX_white.png'
import {connect} from 'react-redux';
import {getAdmin} from '../../redux/reducer';
import axios from 'axios';

function AdminNav(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="justify-content-between">
                <a href='/#'>
                    <Image className="nav-image" src={logo} fluid/>
                </a>
                <h4 style={{color: "white"}}>Hi {props.admin.first_name} {props.admin.last_name}</h4>
                <Nav variant="light">
                    <Nav.Item>
                        <Nav.Link href='/#'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/#/about'>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/#/resources'>Resources</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/#/links'>Links</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/#/admin/dashboard'>Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/#/admin/new'>New Post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/#/admin/manage'>Manage</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link onClick={()=> axios.post('/auth/logout')}>Logout</Nav.Link>
                    </Nav.Item> */}
                </Nav>
            </Navbar>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin})(AdminNav);
