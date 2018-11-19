import React from 'react';
import { Redirect } from 'react-router-dom';
import {
    Container,
    Col,
    Row,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import { auth } from '../firebase';

import './Home.css';
import logo from '../tasker.png';
import List from '../components/List';
import ListTable from '../components/ListTable';

class Lists extends React.Component {
    constructor(props) {
        super();
        this.state= {
            redirectToLogin: false
        };
    }

    handleLogout = () => {
        auth.signOut().then(function() {
            console.log("Sign-out successful");
            this.setState({ redirectToLogin: true });
        }).catch(function(error) {
            // An error happened.
        });
    }

    render() {
        if (this.state.redirectToLogin) return <Redirect to="/login" />;

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
                                <NavLink onClick={this.handleLogout}>
                                    Logout
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Row>
                <Row>
                    <Col className="Sidebar" sm="4">
                        <ListTable />
                    </Col>
                    <Col className="Content" sm="8">
                        <List />
                    </Col>
                </Row>
            </Container>
        );
    }
};
export default Lists;