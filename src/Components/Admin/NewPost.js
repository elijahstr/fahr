import React, {useState, useEffect} from 'react'
import AdminNav from './AdminNav'
import { Container, Button, Row, Col, Form, Dropdown, Modal} from 'react-bootstrap'
import axios from 'axios'
import {getAdmin} from '../../redux/reducer';
import {connect} from 'react-redux';

function NewPost(props) {
    const [nameArray, setNameArray] = useState([]),
        [post_title, setPostTitle] = useState(""),
        [content, setContent] = useState(""),
        [firstName, setFirstName] = useState(""),
        [lastName, setLastName] = useState(""),
        [dropDownValue, setDropDownValue] = useState("Author name"),
        [incomplete, setIncomplete] = useState(false),
        [date, setDate] = useState("");
    
    var today = new Date(),
        todayDate = (today.getMonth()+1) + '/' + today.getDate() + "/" + today.getFullYear();
    
    useEffect(()=>{
        setDate(todayDate);
        axios.get('/api/author')
        .then(authors => {setNameArray(authors.data)})
    }, [todayDate]);

    useEffect(()=>{
        if(!props.admin.first_name){
            props.history.push('/admin')
        }
    })

    const newPost = () => {
        if(post_title && content && firstName && lastName){
            axios.post('/api/match', {first_name: firstName, last_name: lastName})
            .then(res => {
                axios.post('/api/post', {author_id: res.data[0].admin_id, content, post_title, post_date: date})
                .then(()=> props.history.push(`/admin/dashboard`))
            })
        }
        else{
            setIncomplete(true);
        }

    }

    const dropDownMapped = nameArray.map((data, i)=>(
        <div key={i}>
           <Dropdown.Item onSelect={()=>{setFirstName(nameArray[i].first_name); setLastName(nameArray[i].last_name); setDropDownValue(nameArray[i].first_name + " " + nameArray[i].last_name)}}>{nameArray[i].first_name} {nameArray[i].last_name}</Dropdown.Item> 
        </div>
    ))

    
    return (
        <div>
            <AdminNav/>
            <>
            <Modal show={incomplete} onHide={() => setIncomplete(false)} variant="danger">
                <Modal.Header closeButton>
                    <Modal.Title>Please complete all the required fields</Modal.Title>
                </Modal.Header>
            </Modal>
            </>
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
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Date</Form.Label>
                                <Form.Control value={date} 
                                            type="text"
                                            size="lg"
                                            readOnly={true}
                                        />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label>Author</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle variant='primary' id='dropdown-basic'>
                                    {dropDownValue}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {dropDownMapped}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Form.Group>
                        <Form.Label>Post Content</Form.Label>
                        <Form.Control as='textarea' rows='20' value={content}
                        onChange={e => {setContent(e.target.value)}}
                        type="text"/>
                    </Form.Group>
                    <Button onClick={() => newPost()}>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin})(NewPost);
