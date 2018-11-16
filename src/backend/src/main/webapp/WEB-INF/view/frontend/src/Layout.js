import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import {
//     Navbar,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink } from 'reactstrap';

import './Layout.css';
import Home from './pages/Home';
import Lists from './pages/MyLists';
import Login from './pages/Login';
import Register from './pages/Register';

class Layout extends React.Component {
    render () {
        return (
            <div>
                {/* <header>
                    <Navbar className="Navbar" dark expand="md">
                        <NavbarBrand
                            href="/">
                            <img className="Navbrand-img" src={logo} alt={logo}/>
                        </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/lists">Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </header> */}
                <main className="App-main">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/register' component={Register}/>
                        <Route exact path='/login' component={Login}/>
                        <Route path='/lists' component={Lists}/>
                        {/* <Route path='/groups' component={Groups}/> */}
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Layout;