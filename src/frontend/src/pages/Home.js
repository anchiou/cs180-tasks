import React from 'react';
import {
    Container,
    Col,
    Row,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

import './Home.css';
import logo from '../tasker.png';

class Home extends React.Component {
    render () {
        return (
            <Container className="App-container">
                <Row>
                    <Navbar className="Navbar" dark expand="md">
                        <NavbarBrand
                            href="/">
                            <img className="Navbrand-img" src={logo} alt={logo}/>
                        </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/lists">Lists</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Row>
                <Row>
                    <Col className="Sidebar">

                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Home;