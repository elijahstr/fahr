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
                <h1>Here are some of our favorite books and articles:</h1>
            </Container>
            <Container style={{marginTop: '20px'}}>
                <ul>
                    <li>
                        <h2><a target="_blank" rel='noopener noreferrer' href='https://www.julielythcotthaims.com/how-to-raise-an-adult'>How To Raise An Adult</a></h2> 
                    </li>
                    <li>
                        <h2><a target="_blank" rel='noopener noreferrer' href='https://www.harpercollins.com/products/the-teenage-brain-frances-e-jensenamy-ellis-nutt?variant=32207322710050'>The Teenage Brain</a></h2>   
                    </li>
                    <li>
                        <h2><a target="_blank" rel='noopener noreferrer' href='https://www.calnewport.com/books/digital-minimalism/'>Digital Minimalism</a></h2>
                    </li>
                    <li>
                        <h2><a target="_blank" rel='noopener noreferrer' href='https://www.theatlantic.com/magazine/archive/2017/09/has-the-smartphone-destroyed-a-generation/534198/'>Have Smartphones Destroyed A Generation?</a></h2>
                    </li>
                </ul>
            </Container>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin})(Links);
