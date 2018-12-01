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
import ListMenu from '../components/ListMenu';

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            lid: null,    // Id of current list displayed
            name: null    // Name of current list displayed
        };
    }

    updateListView = (lid, name) => {
        console.log("Home.updateListView -> lid, name: ", lid, name);
        this.setState({ lid: lid, name: name });
    }

    handleLogout = () => {
        auth.signOut().then(function() {
            console.log("Sign-out successful");
            return (<Redirect to="/login" />);
        }).catch(function(error) {
            console.error("Error logging out");
        });
    }

    render() {
        console.log("home -> uid: ", this.props.uid);

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
                        {this.props.uid &&
                        <ListMenu
                            uid={this.props.uid}
                            updateListView={this.updateListView}/>}
                    </Col>
                    <Col className="Content" xs="8">
                        {this.state.lid && <List lid={this.state.lid} />}
                    </Col>
                </Row>
            </Container>
        );
    }

    componentWillUnmount() {
        // return (
        //     <Redirect to="/login" />
        // );
    }
};
export default Home;