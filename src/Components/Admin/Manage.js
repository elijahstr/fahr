import React, {useState, useEffect} from 'react'
import AdminNav from './AdminNav'
import { Container, Button, Row, Col, Form, Modal, Table} from 'react-bootstrap'
import axios from 'axios'
import {getAdmin} from '../../redux/reducer';
import {connect} from 'react-redux';

function ManagePosts(props) {
    const [addAdmin, setAddAdmin] = useState(false),
    [first_name, setFirstName] = useState(""),
    [last_name, setLastName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [password2, setPassword2] = useState(""),
    [passwordMatch, setPasswordMatch]=useState(false),
    [adminArr, setAdminArr] = useState([]),
    [subject, setSubject] = useState(""),
    [emailBody, setEmailBody] = useState("");

    const newAdmin = () => {
        if(password===password2){
            axios.post('/auth/register', {email, password, first_name, last_name})
            .then(()=>setAddAdmin(false));
        }
        else{
            setPasswordMatch(true);
        }
    }

    const massEmail = () => {
        axios.post('/api/email', {subject, emailBody})
        .then(() =>{
            alert('Message Sent')
            setSubject("")
            setEmailBody("")
        })
    }

    useEffect(()=>{
        axios.get('/admin/list')
        .then(admins => {setAdminArr(admins.data)})
    });

    useEffect(()=>{
        if(!props.admin.first_name){
            props.history.push('/admin')
        }
    })

    const adminList = adminArr.map((data, i)=>(
        <tr key={i}>
            <td>{adminArr[i].first_name}</td>
            <td>{adminArr[i].last_name}</td>
            <td>{adminArr[i].email}</td>
        </tr>
    ))

    return (
        <div>
            <AdminNav/>
            <>
            <Modal show={passwordMatch} onHide={() => setPasswordMatch(false)} variant="danger">
                <Modal.Header closeButton>
                    <Modal.Title>Passwords do not match.</Modal.Title>
                </Modal.Header>
            </Modal>
            </>
            <Container>
                {addAdmin ? 
                <Form>
                    <h2>Add Admin</h2>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                    value={first_name}
                                    onChange={e=>setFirstName(e.target.value)}
                                    type='text'
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                    value={last_name}
                                    onChange={e=>setLastName(e.target.value)}
                                    type='text'
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            type='email'
                        />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    value={password}
                                    onChange={e=>setPassword(e.target.value)}
                                    type='password'
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control 
                                    value={password2}
                                    onChange={e=>setPassword2(e.target.value)}
                                    type='password'
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button onClick={()=>newAdmin()}>Add Admin</Button>
                    <Button onClick={() => setAddAdmin(false)}>Cancel</Button>
                </Form>
                :
                <Container>
                    <Container>
                        <Button onClick={() => setAddAdmin(true)}>Register New Admin</Button>
                        <h3>Admins:</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adminList}
                            </tbody>
                        </Table>
                    </Container>
                    <Container>
                        <h3>Send Mass Email:</h3>
                        <Form>
                            <Form.Group>
                                <Form.Label>Subject</Form.Label>
                                <Form.Control 
                                    value={subject}
                                    onChange={e=>setSubject(e.target.value)}
                                    type='text'
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email Body</Form.Label>
                                <Form.Control
                                    as='textarea' rows='10' 
                                    value={emailBody}
                                    onChange={e=>setEmailBody(e.target.value)}
                                    type='text'
                                />
                            </Form.Group>
                            <Button onClick={()=>massEmail()}>Send</Button>
                        </Form>
                    </Container>
                </Container>
                }
            </Container>
            
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getAdmin})(ManagePosts);
