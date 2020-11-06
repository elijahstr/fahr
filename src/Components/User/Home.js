import React, {useState, useEffect} from 'react'
import UserNav from './UserNav';
import TextHeader from './Images/FAHR_TEXT_transparent.png'
import { Container, Button, Image, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux';
import {getAdmin} from '../../redux/reducer';
import AdminNav from '../Admin/AdminNav';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Home(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let stopCall = false;
        if(!stopCall){
            axios.get('/api/all')
            .then(res => {
                setPosts(res.data)
            });
        }

        return () => stopCall = true;
    });

    const mappedPosts = posts.map((data, i) => (
        <div key={i}>
            <Container>
                <a href={`/#/post/${data.post_id}`}>
                   <h1>{data.post_title}</h1> 
                </a>
                <h4>{data.first_name} {data.last_name} <p>{data.post_date}</p></h4>
                <p>{data.content}</p> 
            </Container>
            
        </div>
    ))

    return (
        <div>
            {props.admin.first_name ? <AdminNav/> :
           <UserNav />}
           <Container>
               <Image src={TextHeader} fluid/>
           </Container>
           {mappedPosts}
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin})(Home);
