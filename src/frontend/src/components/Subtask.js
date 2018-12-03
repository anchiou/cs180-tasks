import React from'react';
import {
    Collapse,
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalHeader,
    Table } from 'reactstrap';
import { db } from '../firebase.js';

import './List.css';

class Subtask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            status: this.props.status,
            collapse: false,
            subtaskModal: false
        };
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleSubtask = () => {
        this.setState({
            subtaskModal: !this.state.subtaskModal
        });
    }

    updateStatus = () => {
        console.log("Subtask.updateStatus success");
        var subtaskRef = db.collection("subtasks").doc(this.props.id);
        console.log("Subtask -> subtaskRef: ", subtaskRef);

        subtaskRef.update({
            status: !this.props.status
        })
            .then(function() {
                console.log("Status successfully updated!");
            })
            .catch(function(error) {
                console.error("Error updating document: ", error);
            });
    }

    updateSubtask = () => {
        if (this.state.name !== "") {
            var subtaskRef = db.collection("subtasks").doc(this.props.id);
            subtaskRef.update({
                name: this.state.name,
            })
                .then(function() {
                    console.log("Subtask successfully updated!");
                })
                .catch(function(error) {
                    console.error("updateTask -> Error updating document: ", error);
                });
        } else {
            alert("Error: Must enter a subtask name");
        }
    }

    deleteSubtask = () => {
        var subtaskRef = db.collection("subtasks").doc(this.props.id);
        subtaskRef.delete()
            .then(() => {
                console.log("--------deleteSubtask Success");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <Table className="Table-spacing">
                    <tbody>
                        <tr className="Child-row">
                            <td colSpan="0">
                                <span className="pretty p-default p-round">
                                    {this.props.status && <input
                                        type="checkbox"
                                        onClick={this.updateStatus}
                                        defaultChecked={true} />}
                                    {!this.props.input && <input
                                        type="checkbox"
                                        onClick={this.updateStatus}
                                        defaultChecked={false} />}
                                    <span className="state p-success-o">
                                        <label>{this.props.name}</label>
                                    </span>
                                </span>
                            </td>
                            <td align="right">
                                <div
                                    className="icon menu gear_menu"
                                    onClick={this.toggle}>
                                    <svg
                                        width="15"
                                        height="3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-svgs-path="sm1/more_small.svg">
                                        <path
                                            d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0
                                            3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0
                                            3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                                            fill="currentColor"
                                            fillRule="evenodd">
                                        </path>
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Collapse isOpen={this.state.collapse}>
                    <Table hover={true}>
                        <tbody align="right">
                            <tr>
                                <td onClick={this.toggleSubtask}>
                                    Edit Subtask
                                </td>
                            </tr>
                            <tr>
                                <td onClick={this.deleteSubtask}>
                                    Delete Subask
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Collapse>
                <Modal isOpen={this.state.subtaskModal} toggle={this.toggleSubtask}>
                    <ModalHeader
                        className="Modal-header"
                        toggle={this.toggleSubtask}>
                        Edit Subtask
                    </ModalHeader>
                    <Container>
                        <Form>
                            <FormGroup>
                                <Label for="exampleTask">Subtask</Label>
                                <Input
                                    type="text"
                                    name="subtask"
                                    id="exampleSubtask"
                                    placeholder={this.props.name}
                                    onChange={e => this.setState(
                                        { name: e.target.value }
                                    )}/>
                            </FormGroup>
                            <div className="Modal-footer">
                                <Button
                                    type="button"
                                    color="primary"
                                    onClick={this.updateSubtask}>
                                    Submit
                                </Button>{' '}
                                <Button
                                    color="secondary"
                                    onClick={this.toggleSubtask}>
                                    Cancel
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </Modal>
            </div>
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props.id === prevProps.id) {
            if (this.props.name !== prevProps.name) {
                this.toggleSubtask();
                this.toggle();
            }
        }
    }
}

export default Subtask;