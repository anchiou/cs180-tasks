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
import Subtask from './Subtask';

function SubtaskList (props) {
    const subtasks = props.subtasks;
    const listItems =  subtasks.map((subtask) =>
        <Subtask
            key={subtask.id}
            id={subtask.id}
            name={subtask.name}
            status={subtask.status} />
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
            subtaskName: "",
            subtasks: [],
            collapse: false,
            taskModal: false,
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

    toggleTask = () => {
        this.setState({
            taskModal: !this.state.taskModal
        });
    }

    fetchData = () => {
        console.log("Task -> props.id: ", this.props.id);

        db.collection("subtasks").where("taskId", "==", this.props.id)
            .onSnapshot((querySnapshot) => {
                let newState = [];

                querySnapshot.forEach((doc) => {
                    let subtask = doc.data();
                    console.log(`${doc.id} => ${doc.data()}`);
                    console.log(doc.data().name);
                    newState.push({
                        id: doc.id,
                        name: subtask.name,
                        status: subtask.status
                    });
                });

                this.setState({
                    subtasks: newState
                });
            });
    }

    updateStatus = () => {
        console.log("----OnClick UpdateStatus");
        var taskRef = db.collection("tasks").doc(this.props.id);

        taskRef.update({
            status: !this.props.status
        })
            .then(function() {
                console.log("Status successfully updated!");
            })
            .catch(function(error) {
                console.error("Error updating document: ", error);
            });

        // Update associated subtasks
        var batch = db.batch();
        db.collection("subtasks").where("taskId", "==", this.props.id).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    batch.update(doc.ref, {"status": this.props.status});
                });
                batch.commit().then(() => {
                    console.log("Task.updateStatus -> batch update successful");
                });
            });
    }

    updateTask = () => {
        if (this.state.name !== "" || this.state.description !== "") {
            var taskRef = db.collection("tasks").doc(this.props.id);
            taskRef.update({
                name: this.state.name ? this.state.name : this.props.name,
                description: this.state.description ? this.state.description : this.props.description,
            })
                .then(function() {
                    console.log("Task successfully updated!");
                })
                .catch(function(error) {
                    console.error("updateTask -> Error updating document: ", error);
                });
        }
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
        if (this.state.subtaskName !== "") {
            db.collection("subtasks").add({
                name: this.state.subtaskName,
                status: false,
                taskId: this.props.id
            })
                .then((docRef) => {
                    console.log("addTask-----", docRef);
                    this.toggle();
                    this.toggleSubtask();
                })
                .catch((error) => {
                    console.log("Error submitting document: ", error);
                });

            this.setState({
                subtaskName: ""
            });
        } else {
            alert("Error: Cannot create a subtask without a name. Please enter a subtask name.");
        }
    }

    componentDidMount() {
        this.fetchData();
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
                            {/* <td>
                                    <div
                                        className="icon menu gear_menu"
                                        onClick={this.showDescription}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            data-svgs-path="sm1/comments.svg">
                                            <path
                                                fill="none"
                                                stroke="currentColor"
                                                d="M16.5 18.58V16.5h.94c.73 0
                                                1.01-.05 1.3-.2.24-.14.42-.32.55-.56.16-.29.21-.57.21-1.3V7.56c0-.73-.05-1.01-.2-1.3a1.32
                                                1.32 0 0 0-.56-.55c-.29-.16-.57-.21-1.3-.21H6.56c-.73
                                                0-1.01.05-1.3.2a1.32 1.32 0 0
                                                0-.55.56c-.16.29-.21.57-.21 1.3v6.88c0
                                                .73.05 1.01.2 1.3.14.24.32.42.56.55.29.16.57.21
                                                1.3.21h5.6l3.55 2.49a.5.5 0 0 0 .79-.41z">
                                            </path>
                                        </svg>
                                    </div>
                            </td> */}
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
                                <td onClick={this.toggleTask}>
                                    Edit Task
                                </td>
                            </tr>
                            <tr>
                                <td onClick={this.toggleSubtask}>
                                    Add Subtask
                                </td>
                            </tr>
                            <tr>
                                <td onClick={this.deleteTask}>
                                    Delete Task
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Collapse>
                <SubtaskList subtasks={this.state.subtasks} />
                <Modal isOpen={this.state.taskModal} toggle={this.toggleTask}>
                    <ModalHeader
                        className="Modal-header"
                        toggle={this.toggleTask}>
                        Edit Task
                    </ModalHeader>
                    <Container>
                        <Form>
                            <FormGroup>
                                <Label for="exampleTask">Task</Label>
                                <Input
                                    type="text"
                                    name="task"
                                    id="exampleTask"
                                    placeholder={this.props.name}
                                    onChange={e => this.setState(
                                        { name: e.target.value }
                                    )}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleDescription">
                                    Description
                                </Label>
                                <Input
                                    type="text"
                                    name="description"
                                    id="exampleDescription"
                                    placeholder={this.props.description}
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

    componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
            this.toggleTask();
            this.toggle();
        }
    }
}

export default Task;