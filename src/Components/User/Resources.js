import React from 'react'
import UserNav from './UserNav'
import AdminNav from '../Admin/AdminNav';
import { Container} from 'react-bootstrap'
import {connect} from 'react-redux';
import {getAdmin} from '../../redux/reducer';

function Resources(props) {
    return (
        <div>
          {props.admin.first_name ? <AdminNav/> :
           <UserNav />}
        <Container className="d-flex justify-content-center">
            <h1>Resources</h1>
        </Container>
        <Container>
            <h3>General Information:</h3>
        </Container>
        <Container>
            <h3>Important Forms:</h3>
        </Container>
        <Container>
            <h3>Misc:</h3>
        </Container>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin})(Resources);

