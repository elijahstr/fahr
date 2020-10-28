import React, {useState, useEffect} from 'react'
import AdminNav from './AdminNav'
import { Container, Button, Image, Row, Col, Form} from 'react-bootstrap'
import axios from 'axios'

function NewPost() {
    const [post_title, setPostTitle] = useState(""),
        [content, setContent] = useState(""),
        [date, setDate] = useState("");
    return (
        <div>
            <AdminNav/>
            <Form>
                <Form.Group>
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control value={post_title} 
                                onChange={e => setPostTitle(e.target.value)} 
                                type="text"
                                size="lg"
                            />
                </Form.Group>
            </Form>
        </div>
    )
}

export default NewPost
