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
import { auth } from '../firebase.js';

import './Login.css';
import logo from '../tasker.png';

class Register extends React.Component {
    constructor(props) {
        super();

        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((response) => {
                console.log('Register response:', response);
                alert('Account created. Now logging you in ...');
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/invalid-email') {
                    alert('Invalid email');
                } else if (errorCode === 'auth/email-already-in-use') {
                    alert('Email already in use');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });

        this.setState({
            email: "",
            password: ""
        });
    }

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
                                    placeholder="Email"
                                    onChange={e => this.setState(
                                        { email: e.target.value }
                                    )}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="Password"
                                    onChange={e => this.setState(
                                        { password: e.target.value }
                                    )}/>
                            </FormGroup>
                            <Button type="button" color="primary" block onClick={this.handleSubmit}>
                                Sign up
                            </Button>
                        </Form>
                        <Nav className="Text">
                            Already have an account?
                            <NavLink className="No-padding" href="/login">
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