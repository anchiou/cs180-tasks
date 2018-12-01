import React from 'react';
import {
    Button,
    Container,
    Collapse,
    Form,
    FormGroup,
    Input,
    Label,
    Nav,
    NavLink,
    Modal,
    ModalHeader,
    Table } from 'reactstrap';
import { db } from '../firebase.js';

import './List.css';
import ListItem from './ListItem';

function ListItems(props) {
    const lists = props.lists;
    const listItems = lists.map((list) =>
        <ListItem
            key={list.id}
            id={list.id}
            name={list.name}
            updateListView={props.updateListView}/>
    );
    return (
        listItems
    );
}

class ListMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // current: "",    // Current list being viewed
            name: "",       // Tracks new list name
            lists: [],      // Array of lists owned by user
            collapse: true,
            modal: false
        };
    }

    updateListView = (lid, name) => {
        console.log("ListMenu.updateListView -> lid, name: ", lid, name);
        this.props.updateListView(lid, name);
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    collapse = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    handleSubmit = () => {
        console.log("/listMenu/handleSubmit------", this.state);
        db.collection("lists").add({
            name: this.state.name,
            userId: this.props.uid
        })
            .then((docRef) => {
                console.log("addList-----", docRef);
                this.toggle();
            })
            .catch((error) => {
                console.log("addList -> Error submitting document: ", error);
            });

        this.setState({ name: "" });
    }

    componentDidMount() {
        console.log("ListMenu -> uid:", this.props.uid);
        db.collection("lists").where("userId", "==", this.props.uid)
            .onSnapshot((querySnapshot) => {
                let newState = [];

                querySnapshot.forEach((doc) => {
                    let list = doc.data();
                    console.log(`${doc.id} => ${doc.data()}`);
                    console.log(doc.data().name);
                    newState.push({
                        id: doc.id,
                        name: list.name
                    });
                });

                this.setState({
                    lists: newState
                });
            });
    }

    render() {
        return (
            <div>
                <Table className="List-menu">
                    <tbody>
                        <tr className="List-row">
                            <td>
                                <Nav>
                                    <NavLink onClick={this.collapse}>
                                        My Lists
                                    </NavLink>
                                </Nav>
                            </td>
                            <td>
                                <Button
                                    outline={true}
                                    color="primary"
                                    onClick={this.toggle}>
                                    +
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Collapse isOpen={this.state.collapse}>
                    <Table className="List-menu" hover={true}>
                        <tbody>
                            <ListItems
                                lists={this.state.lists}
                                updateListView={this.updateListView} />
                        </tbody>
                    </Table>
                </Collapse>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader
                        className="Modal-header"
                        toggle={this.toggle}>
                        Add List
                    </ModalHeader>
                    <Container>
                        <Form>
                            <FormGroup>
                                <Label for="exampleList">List Name</Label>
                                <Input
                                    type="text"
                                    name="list"
                                    id="exampleList"
                                    placeholder="E.g., Work, Chores, Groceries, etc."
                                    onChange={e => this.setState(
                                        { name: e.target.value }
                                    )}/>
                            </FormGroup>
                            <div className="Modal-footer">
                                <Button
                                    type="button"
                                    color="primary"
                                    onClick={this.handleSubmit}>
                                    Submit
                                </Button>{' '}
                                <Button
                                    color="secondary"
                                    onClick={this.toggle}>
                                    Cancel
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </Modal>
            </div>
        );
    }

    componentWillUnmount() {
        // var unsubscribe = db.collection("lists").onSnapshot(function () {});
        // unsubscribe();
    }
}

export default ListMenu;