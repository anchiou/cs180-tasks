import React from 'react';
import {
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
import Task from './Task';

function TaskList(props) {
    const tasks = props.tasks;
    const listItems = tasks.map((task) =>
        <Task
            key={task.id}
            id={task.id}
            name={task.name}
            status={task.status}
            description={task.description}
            priority={task.priority}
            subtasks={task.subtasks}/>
    );
    return (
        listItems
    );
}

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // listId: "diccsZn15r7BBHLiPXp8",
            listName: "My Tasks",
            taskname: "",
            priority: "",
            description: "",
            tasks: [],
            modal: false
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleSubmit = () => {
        console.log("/lists/handleSubmit------", this.state);
        db.collection("tasks").add({
            name: this.state.taskName,
            status: false,
            priority: this.state.priority,
            description: this.state.description,
            listId: this.props.lid
        })
            .then((docRef) => {
                console.log("addTask-----", docRef);
                this.toggle();
            })
            .catch((error) => {
                console.log("Error submitting document: ", error);
            });

        this.setState({
            name: "",
            priority: "",
            description: ""
        });
    }

    componentDidMount() {
        db.collection("tasks").where("listId", "==", this.props.lid)
            .onSnapshot((querySnapshot) => {
                let newState = [];

                querySnapshot.forEach((doc) => {
                    let task = doc.data();
                    console.log(`${doc.id} => ${doc.data()}`);
                    console.log(doc.data().name);
                    newState.push({
                        id: doc.id,
                        name: task.name,
                        status: task.status,
                        description: task.description,
                        priority: task.priority,
                        subtasks: task.subtasks,
                    });
                });

                this.setState({
                    tasks: newState
                });
            });
    }

    render() {
        return (
            <div>
                <header className="List-header">
                    <Table>
                        <tbody>
                            <tr className="List-row">
                                <td>
                                    <h4>{this.state.listName}</h4>
                                </td>
                                <td align="right">
                                    <div className="icon menu gear_menu">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            data-svgs-path="sm1/edit.svg">
                                            <g fill="none" fillRule="evenodd">
                                                <path
                                                    fill="currentColor"
                                                    d="M9.5 19h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z" />
                                                <path
                                                    stroke="currentColor"
                                                    d="M4.42 16.03a1.5 1.5 0 0
                                                    0-.43.9l-.22 2.02a.5.5 0 0 0
                                                    .55.55l2.02-.21a1.5 1.5 0 0 0
                                                    .9-.44L18.7 7.4a1.5 1.5 0 0 0
                                                    0-2.12l-.7-.7a1.5 1.5 0 0 0-2.13
                                                    0L4.42 16.02z">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </header>
                <main>
                    <TaskList tasks={this.state.tasks}/>
                    <Table>
                        <tbody>
                            <tr>
                                <td align="right">
                                    <Button
                                        outline={true}
                                        color="primary"
                                        onClick={this.toggle}>
                                        + Add Task
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader
                            className="Modal-header"
                            toggle={this.toggle}>
                            Add Task
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
                                                    { taskName: e.target.value }
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
                </main>
            </div>
        );
    }
}

export default List;