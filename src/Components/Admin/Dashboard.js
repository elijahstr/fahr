import React, {useState, useEffect} from 'react'
import AdminNav from './AdminNav'
import { Container, Button, Image, Row, Col} from 'react-bootstrap'
import axios from 'axios'

function Dashboard() {
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
            <AdminNav/>
            <Container>
                <Col>
                    <Button href={`/#/admin/new`}>New Post</Button>
                </Col>
                {mappedPosts}
            </Container>
            
        </div>
    )
}

export default Dashboard
