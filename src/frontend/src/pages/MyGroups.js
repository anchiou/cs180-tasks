import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

import logo from '../tasker.png';


class Groups extends React.Component {
    render () {
        return (
            <div>
                <header>
                    <Navbar className="navbar" dark expand="md">
                        <NavbarBrand
                            href="/">
                            <img className="navbrand-img" src={logo} alt={logo}/>
                        </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/lists">My Lists</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/groups">My Groups</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </header>
            </div>
        );
    }
};

export default Groups;