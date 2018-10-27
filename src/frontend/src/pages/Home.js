import React from 'react';
import CarouselExample from '../components/Carousel';
import { Button, Row, Col, Form, FormGroup, Label, Input, NavItem, NavLink } from 'reactstrap';
import Registration from '../components/Registration';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div id="main">
                {/* Home  */}
                {/* <div className="Button"> */}
                {/* <Registration />

                    <Button>
                        <Button href="/lists">My Lists</Button>
                    </Button> */}

                <div id="one">
                    <CarouselExample />
                </div>
                <div id="two">
                    {/* <Row>
                        <Col sm="12" md={{ size: 10, offset: 3 }}>New to Tasker ?</Col>
                    </Row>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col><Registration /></Col>
                    </Row>
                    <Row >
                        <Col sm="12" md={{ size: 10, offset: 3 }}>Already have an account ?</Col>
                    </Row>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col><Login /></Col>
                    </Row> */}
                    <Form>
                        <FormGroup>
                            <Label for="exampleUsername" >Username</Label>
                            <Input type="Username" name="Username" id="exampleUsername" placeholder="Username" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                        </FormGroup>
                        <Registration />
                    </Form>
                    <Button>
                        <Button href="/lists">Sign in</Button>
                    </Button>

                </div>

            </div>
        );
    }
};

export default Home;