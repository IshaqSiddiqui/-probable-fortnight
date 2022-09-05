import React from 'react'
import {Container, Form, Row, Button, Col} from "react-bootstrap";
import {useState} from 'react';
import {Link} from "react-router-dom";

function handleLogin(e){
    e.preventDefault();
}

function Login() {
    const [name, setname] = useState(''); 
    const [email, setemail] = useState(''); 
    const [password, setpassword] = useState(''); 

    return (
    <Container> 
        <Row>
            <Col md={7} className="f-flex align-items-center justify-content-center flex-direction-column">
        <Form onSubmit={handleLogin}
        >


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} value={email} required/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} value={password} required/>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div> 
            <p> Do not have an account? </p> 
            <Link to="/signup"> Signup here </Link>
            </div>
        </Form>
        </Col>
        </Row>
        </Container>
      );
    
    
   
}

export default Login;
