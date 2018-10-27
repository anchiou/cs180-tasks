import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

import './Form.css';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Nav>
                    New to Tasker?
                    <NavLink className='No-padding' href='#' onClick={this.toggle}>
                        Sign up
                    </NavLink>
                </Nav>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Registration</ModalHeader>
                    <ModalBody>
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
                                <Label for="exampleUsername">Username</Label>
                                <Input
                                    type="Username"
                                    name="Username"
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
                            <Nav>
                                Already have an account?
                                <NavLink className='No-padding' href='#' onClick={this.toggle}>
                                    Log in
                                </NavLink>
                            </Nav>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                            Sign up
                        </Button>
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Registration;