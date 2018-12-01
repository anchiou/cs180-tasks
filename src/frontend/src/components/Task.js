import React from'react';
import {
    Collapse,
    Button,
    Container,
    Col,
    Row,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalHeader,
    Table } from 'reactstrap';
import { db } from '../firebase.js';

import './List.css';

function SubtaskList (props) {
    if (!props.subtasks) {
        return null;
    }
    const subtasks = props.subtasks;
    const listItems =  subtasks.map((subtask) =>
        <Table className="Table-spacing" key={subtask}>
            <tbody>
                <tr className="Child-row">
                    <td colSpan="0">
                        <span className="pretty p-default p-round">
                            <input
                                type="checkbox"
                                defaultChecked={subtask.status} />
                            <span className="state p-success-o">
                                <label>{subtask.name}</label>
                            </span>
                        </span>
                    </td>
                    {/* <td align="right">
                        <div className="icon menu gear_menu">
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
                    </td> */}
                </tr>
            </tbody>
        </Table>
    );
    return (
        listItems
    );
}

class Task extends React.Component {
    constructor(props) {
        super(props);

        console.log("Task props----", this.props);

        this.state = {
            name: "",
            description: "",
            priority: "",
            subtaskName: "",
            collapse: false,
            taskModal: false,
            subtaskModal: false
        };
    }

    // createSubtask = () => {
    //     // var subtaskMap = new Map();
    //     // subtaskMap.set("name", this.state.subtaskName);
    //     // subtaskMap.set("status", false);
    //     // console.log("submap, props", subtaskMap, this.props.subtasks);
    //     let subm = this.props.subtasks.push({
    //         name: this.state.subtaskName,
    //         status: false
    //     });

    //     console.log("subm", subm);
    //     this.setState({ subtasks: this.props.subtasks.push({
    //         name: this.state.subtaskName,
    //         status: false
    //     })});
    // }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleSubtask = () => {
        this.setState({
            subtaskModal: !this.state.subtaskModal
        });
    }

    toggleTask = () => {
        this.setState({
            taskModal: !this.state.taskModal
        });
    }

    updateStatus = () => {
        console.log("----OnClick UpdateStatus");
        var taskRef = db.collection("tasks").doc(this.props.id);
        console.log(taskRef);

        taskRef.update({
            status: !this.props.status
        })
            .then(function() {
                console.log("Status successfully updated!");
            })
            .catch(function(error) {
                console.error("Error updating document: ", error);
            });
    }

    updateTask = () => {
        var taskRef = db.collection("tasks").doc(this.props.id);
        taskRef.update({
            name: this.state.name ? this.state.name : this.props.name,
            description: this.state.description ? this.state.description : this.props.description,
            priority: this.state.priority ? this.state.priority : this.props.priority
        })
            .then(function() {
                console.log("Task successfully updated!");
                this.toggleTask();
            })
            .catch(function(error) {
                console.error("updateTask -> Error updating document: ", error);
            });
    }

    deleteTask = () => {
        var taskRef = db.collection("tasks").doc(this.props.id);
        taskRef.delete()
            .then(() => {
                console.log("--------deleteTask Success");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    addSubtask = () => {
        // this.createSubtask();

        var taskRef = db.collection("tasks").doc(this.props.id);
        taskRef.get().then((doc) => {
            const task = doc.data();
            console.log("asdfg", task.subtasks);
            let subMap = [];
            subMap = task.subtasks;
            subMap.push({name: this.state.subtaskName, status: false});
            console.log("asdfgh", subMap);
            taskRef.update({
                subtasks: subMap
            })
                .then(function() {
                    console.log("Subtask successfully added!");
                    //this.toggle();
                })
                .catch(function(error) {
                    console.error("addSubtask -> Error updating document: ", error);
                });
        });

        // taskRef.update({
        //     subtasks: this.state.subtasks
        // })
        //     .then(function() {
        //         console.log("Subtask successfully added!");
        //         this.toggle();
        //     })
        //     .catch(function(error) {
        //         console.error("addSubtask -> Error updating document: ", error);
        //     });
    }

    render() {
        return (
            <div>
                <Table className="Table-spacing">
                    <tbody>
                        <tr>
                            <div className="Table-data" >
                                <span className="pretty p-default p-round">
                                    <input
                                        type="checkbox"
                                        onClick={this.updateStatus}
                                        defaultChecked={this.props.status} />
                                    <span className="state p-success-o">
                                        <label>{this.props.name}</label>
                                    </span>
                                </span>
                            </div>
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
                                <td onClick={this.deleteTask}>
                                    Delete Task
                                </td>
                            </tr>
                            <tr>
                                <td onClick={this.toggleTask}>
                                    Edit Task
                                </td>
                            </tr>
                            <tr>
                                <td onClick={this.toggleSubtask}>
                                    Add Subtask
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Collapse>
                <SubtaskList subtasks={this.props.subtasks} />
                <Modal isOpen={this.state.taskModal} toggle={this.toggleTask}>
                    <ModalHeader
                        className="Modal-header"
                        toggle={this.toggleTask}>
                        Edit Task
                    </ModalHeader>
                    <Container>
                        <Form>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleTask">Task</Label>
                                        <Input
                                            type="text"
                                            name="task"
                                            id="exampleTask"
                                            placeholder="Task Name"
                                            onChange={e => this.setState(
                                                { name: e.target.value }
                                            )}/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePriority">
                                            Priority
                                        </Label>
                                        <Input
                                            type="select"
                                            onChange={e => this.setState(
                                                { priority: e.target.value }
                                            )}>
                                            <option>None</option>
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="exampleDescription">
                                    Description
                                </Label>
                                <Input
                                    type="text"
                                    name="description"
                                    id="exampleDescription"
                                    placeholder="Add a description to your task"
                                    onChange={e => this.setState(
                                        { description: e.target.value }
                                    )}/>
                            </FormGroup>
                            <div className="Modal-footer">
                                <Button
                                    type="button"
                                    color="primary"
                                    onClick={this.updateTask}>
                                    Submit
                                </Button>{' '}
                                <Button
                                    color="secondary"
                                    onClick={this.toggleTask}>
                                    Cancel
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </Modal>
                <Modal isOpen={this.state.subtaskModal} toggle={this.toggleSubtask}>
                    <ModalHeader
                        className="Modal-header"
                        toggle={this.toggleSubtask}>
                        Add Subtask
                    </ModalHeader>
                    <Container>
                        <Form>
                            <FormGroup>
                                <Label for="exampleTask">Subtask</Label>
                                <Input
                                    type="text"
                                    name="subtask"
                                    id="exampleSubtask"
                                    placeholder="Subtask Name"
                                    onChange={e => this.setState(
                                        { subtaskName: e.target.value }
                                    )}/>
                            </FormGroup>
                            <div className="Modal-footer">
                                <Button
                                    type="button"
                                    color="primary"
                                    onClick={this.addSubtask}>
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

    componentWillUnmount() {
        // var unsubscribe = db.collection("tasks").onSnapshot(function () {});
        // unsubscribe();
    }
}

export default Task;