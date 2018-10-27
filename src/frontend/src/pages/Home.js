import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import CarouselExample from '../components/Carousel';
import Registration from '../components/Registration';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div id="main">
                <div id="one">
                    <CarouselExample />
                </div>
                <div id="two">
                    <Form>
                        <FormGroup>
                            <Label for="exampleUsername">
                                Username
                            </Label>
                            <Input
                                type="Username"
                                name="Username"
                                id="exampleUsername"
                                placeholder="Username" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="Password" />
                        </FormGroup>
                        <Registration />
                    </Form>
                    <Button>
                        <Button href="/lists">
                            Sign in
                        </Button>
                    </Button>
                </div>
            </div>
        );
    }
};

export default Home;