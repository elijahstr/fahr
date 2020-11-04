import React, {useState, useEffect} from 'react'
import { Container, Nav, Button, Image, Row, Col, Navbar, DropdownButton, Dropdown, NavDropdown} from 'react-bootstrap'
import logo from '../User/Images/FAHR_BOX_white.png'
import menu from '../User/Images/white-menu-icon-12.jpg'
import {connect} from 'react-redux';
import {getAdmin, clearAdmin} from '../../redux/reducer';
import axios from 'axios';

function AdminNav(props) {
    const [mobileView, setMobileView] = useState(false);

    const width = React.useState(window.innerWidth)[0],
        breakpoint = 1024;
    
    const logout = () => {
        axios.post('/auth/logout')
        .then(()=>{
            props.clearAdmin();
        })
    }

    const dropdownMenu = () => {
        if(width<=breakpoint){
            setMobileView(true)
            console.log(width + "hello");
        }
    }

    useEffect(()=>{
        dropdownMenu()
    })

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <a href='/#'>
                    <Image className="nav-image" src={logo} fluid/>
                </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <h4 style={{color: "white"}}>Hi {props.admin.first_name} {props.admin.last_name}</h4>
                </Nav>
                <Nav>
                <Nav.Link href='/#'>Home</Nav.Link>
                <Nav.Link href='/#/about'>About</Nav.Link>
                <Nav.Link href='/#/resources'>Resources</Nav.Link>
                <Nav.Link href='/#/links'>Links</Nav.Link>
                <Nav.Link href='/#/admin/dashboard'>Dashboard</Nav.Link>
                <Nav.Link href='/#/admin/new'>New Post</Nav.Link>
                <Nav.Link href='/#/admin/manage'>Manage</Nav.Link>
                <Nav.Link onClick={()=>logout()}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin, clearAdmin})(AdminNav);
