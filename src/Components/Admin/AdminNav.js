import React from 'react'
import {Nav, Image, Navbar} from 'react-bootstrap'
import logo from '../User/Images/FAHR_BOX_white.png'
// import menu from '../User/Images/white-menu-icon-12.jpg'
import {connect} from 'react-redux';
import {getAdmin, clearAdmin} from '../../redux/reducer';
import axios from 'axios';
import {Link} from 'react-router-dom';

function AdminNav(props) { 
    const logout = () => {
        axios.post('/auth/logout')
        .then(()=>{
            props.clearAdmin();
        })
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <Link to='/'>
                    <Image className="nav-image" src={logo} fluid/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <h4 style={{color: "white"}}>Hi {props.admin.first_name} {props.admin.last_name}</h4>
                </Nav>
                <Nav>
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                    <Nav.Link><Link to='/resources'>Resources</Link></Nav.Link>
                    <Nav.Link><Link to='/links'>Links</Link></Nav.Link>
                    <Nav.Link><Link to='/admin/dashboard'>Dashboard</Link></Nav.Link>
                    <Nav.Link><Link to='/admin/new'>New Post</Link></Nav.Link>
                    <Nav.Link><Link to='/admin/manage'>Manage</Link></Nav.Link>
                    <Nav.Link onClick={()=>logout()}><Link>Logout</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin, clearAdmin})(AdminNav);
