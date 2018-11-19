import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import {
//     Navbar,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink } from 'reactstrap';
import { auth } from './firebase.js';

import './Layout.css';
import Lists from './pages/MyLists';
import Login from './pages/Login';
import Register from './pages/Register';

class Layout extends React.Component {
    constructor(props) {
        super();

        this.state = {
            user: null
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }

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
                <main className='App-main'>
                    <Switch>
                        <Route exact path='/' render={() => (
                            this.state.user ? (
                                <Redirect to='/lists'/>
                            ) : (
                                <Redirect to='/login'/>
                            )
                        )}/>
                        <Route path='/lists' render={() => (
                            this.state.user ? (
                                <Lists />
                            ) : (
                                <Redirect to='/login'/>
                            )
                        )}/>
                        <Route exact path='/login' render={() => (
                            this.state.user ? (
                                <Redirect to='/lists'/>
                            ) : (
                                <Login />
                            )
                        )}/>
                        <Route exact path='/register' render={() => (
                            this.state.user ? (
                                <Redirect to='/lists'/>
                            ) : (
                                <Register />
                            )
                        )}/>
                        {/* <Route path='/groups' component={Groups}/> */}
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Layout;