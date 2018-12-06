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
import { auth } from  '../firebase.js';

import './Login.css';
import logo from '../tasker.png';

class Login extends React.Component {
    constructor(props) {
        super();

        this.state = {
            email: '',
            password: '',
            user: null
        };
    }

    handleSubmit = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((result) => {
                const user = result.user;
                this.setState({user: user});
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/user-not-found') {
                    alert('User not found');
                } else if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password');
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
                            <Button type="button" block color="primary" onClick={this.handleSubmit}>
                                Log in
                            </Button>
                        </Form>
                        <Nav className="Text">
                            New to Tasker?
                            <NavLink className='No-padding' href='/register'>
                                Sign up
                            </NavLink>
                        </Nav>
                    </Col>
                </Container>
            </div>
        );
    }
};

export default Login;