import React, {useState, useEffect} from 'react'
import UserNav from './UserNav';
import { Container, Button, Image, Row, Col, Form, Alert, Modal} from 'react-bootstrap'
import {connect} from 'react-redux';
import {getAdmin} from '../../redux/reducer';
import AdminNav from '../Admin/AdminNav';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Post(props) {
    const [post, setPost] = useState({}),
        [editing, setEditing] = useState(false),
        [deleteAlert, setDeleteAlert] = useState(false),
        [post_title, setPostTitle] = useState(""),
        [content, setContent] = useState(post.content);

    const deletePost = () => {
        axios.delete(`/api/post/${props.match.params.postid}`)
        .then(()=>{
            props.history.push('/admin/dashboard');
        })
    }

    const editPost = () => {
        console.log(content);
        axios.put(`/api/post/${props.match.params.postid}`, {post_title, content})
        .then(() => {
            setEditing(false)
                axios.get(`/api/post/${props.match.params.postid}`)
                .then(res => {
                    setPost(res.data[0])
                })
        })
        .catch(err => console.log(err));
    }

    useEffect(()=>{
        axios.get(`/api/post/${props.match.params.postid}`)
        .then(res => {
            setPost(res.data[0])
        })
    }, [props.match.params.postid])


    useEffect(()=>{
        setContent(post.content)
        setPostTitle(post.post_title)
    }, [post.content, post.post_title])

    return (
        <div>
            <AdminNav/>
            <>
            <Modal show={deleteAlert} onHide={() => setDeleteAlert(false)} variant="danger">
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>If you delete this post, you will not be able to recover it.</Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setDeleteAlert(false)}>Go Back</Button>
                    <Button variant='danger' onClick={() => deletePost()}>Delete</Button>
                </Modal.Footer>
            </Modal>
            </>
            {editing ? 
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control value={post_title} 
                                onChange={e => setPostTitle(e.target.value)} 
                                type="text"
                                size="lg"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Post Content</Form.Label>
                            <Form.Control as='textarea' rows='20' value={content}
                            onChange={e => {setContent(e.target.value)}}
                            type="text"/>
                        </Form.Group>
                        <Row>
                            <Col><Button onClick={()=> setEditing(false)}>Cancel</Button></Col>
                            <Col><Button onClick={()=> editPost()}>Submit Changes</Button></Col>
                            <Col><Button onClick={() => setDeleteAlert(true)}>Delete Post</Button></Col>
                        </Row>
                        
                    </Form>
                    
                </Container>
            :
            <Container>
                <Button onClick={()=> setEditing(true)}>Edit</Button>
                <h1>{post.post_title}
                </h1>
                
                <h4>
                    {post.first_name} {post.last_name} 
                    <p>{post.post_date}</p> 
                </h4>
                {post.content} 
            </Container>
            }
            </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin})(Post);
