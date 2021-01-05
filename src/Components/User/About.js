import React from 'react'
import UserNav from './UserNav'
import AdminNav from '../Admin/AdminNav';
import { Container, Image} from 'react-bootstrap'
import {connect} from 'react-redux';
import {getAdmin} from '../../redux/reducer';

function About(props) {
    return (
        <div>
            {props.admin.first_name ? <AdminNav/> :
           <UserNav />}
           <Container style={{marginTop: '5px'}}>
                <Image src="https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256263_960_720.jpg" alt='startup' fluid/>
            </Container>
            <Container className="d-flex justify-content-center">
                <h1>Mission Statement:</h1>
            </Container>
            <Container>
                <h3>Families Advocating for Highland Rams (FAHR) is a community organization designed to upend the traditional practices of parental involvement at Highland High School in Salt Lake City.  FAHR forges respectful and reciprocal relationships with and among students and their families throughout the school’s boundaries, amplifies student and family voices often overlooked, and facilitates effective family-school communication in order to support students as they learn, grow and mature.
                </h3>
            </Container>
            
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin})(About);
