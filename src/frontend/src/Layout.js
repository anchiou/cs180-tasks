import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

import Home from './pages/Home';
import Lists from './pages/Lists';
import Groups from './pages/Groups';

class Layout extends React.Component {
    render () {
        return (
            <div>
                <header>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Tasker</NavbarBrand>
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
                <main>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/lists' component={Lists}/>
                        <Route path='/groups' component={Groups}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Layout;