import React, {useState} from 'react'
import { Container, Button, Form} from 'react-bootstrap'
import axios from 'axios'
import {connect} from 'react-redux';
import {getAdmin} from '../../redux/reducer';

function Auth(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const login = () => {
        axios.post('/auth/login', {email, password})
        .then((res) => {
            props.getAdmin(res.data);
            props.history.push('/admin/dashboard')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Container>
                <h2>Login:</h2>
            </Container>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        type="email" 
                        placeholder="Email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        type="password" 
                        placeholder="Password"/>
                    </Form.Group>
                    <Button onClick={()=> login()} variant="dark">
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default connect(null, {getAdmin})(Auth)
