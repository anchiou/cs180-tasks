import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import CreatList from '../components/CreateList';
class Lists extends React.Component {
    render() {
        return (
            <div id="main">
                <div id="one">
                    <h3>My Lists </h3>
                    <ListGroup>
                        <CreatList/>
                        {/* <ListGroupItem active tag="button" action> + Create a new List</ListGroupItem> */}
                        <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
                        <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
                        <ListGroupItem tag="button" action>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                </div>

                <div id="two">
                </div>

            </div>
        );
    }
};
export default Lists;