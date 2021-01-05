import React, {useState, useEffect} from 'react'
import AdminNav from './AdminNav'
import { Container, Button, Col} from 'react-bootstrap'
import axios from 'axios'
import {getAdmin} from '../../redux/reducer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function Dashboard(props) {
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

    useEffect(()=>{
        if(!props.admin.first_name){
            props.history.push('/admin')
        }
    })

    const mappedPosts = posts.map((data, i) => (
        <div key={i}>
            <Container>
                <Link to={`/post/${data.post_id}`}>
                   <h1>{data.post_title}</h1> 
                </Link>
                <h4>{data.first_name} {data.last_name} <p>{data.post_date}</p></h4>
                <p>{data.content}</p> 
            </Container>
            
        </div>
    ))

    return (
        <div>
            <AdminNav/>
            <Container>
                <Col>
                    <Button variant='dark'><Link to='/admin/new'>New Post</Link></Button>
                </Col>
                {mappedPosts}
            </Container>
            
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin})(Dashboard);
