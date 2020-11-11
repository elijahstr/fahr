import React from 'react'
import UserNav from './UserNav'
import AdminNav from '../Admin/AdminNav';
import { Container} from 'react-bootstrap'
import {connect} from 'react-redux';
import {getAdmin} from '../../redux/reducer';

function Links(props) {
    return (
        <div>
            {props.admin.first_name ? <AdminNav/> :
           <UserNav />}
            <Container className="d-flex justify-content-center">
                <h1>Links:</h1>
            </Container>
            <Container>
                <ul>
                    <li>
                        <a href='/'>Link1</a>
                        <p>Lorem ipsum</p>
                    </li>
                    <li>
                        <a href='/'>Link2</a>
                        <p>Lorem ipsum</p>    
                    </li>
                    <li>
                        <a href='/'>Link3</a>
                        <p>Lorem ipsum</p>
                    </li>
                </ul>
            </Container>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin})(Links);
