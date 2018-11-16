import React from 'react';
import {
    Button,
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Nav,
    NavLink } from 'reactstrap';

import './Login.css';
import logo from '../tasker.png';

class Register extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Col className="Register" md="4">
                        <img src={logo} alt={logo}/>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleUsername">
                                    Username
                                </Label>
                                <Input
                                    type="username"
                                    name="username"
                                    id="exampleUsername"
                                    placeholder="Username" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="Password" />
                            </FormGroup>
                        </Form>
                        <Button color="primary" block href="/">
                            Sign up
                        </Button>
                        <Nav className="Text">
                            Already have an account?
                            <NavLink className='No-padding' href='/login'>
                                Log in
                            </NavLink>
                        </Nav>
                    </Col>
                </Container>
            </div>
        );
    }
};

export default Register;