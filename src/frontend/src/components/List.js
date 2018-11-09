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
    ModalFooter,
    Table } from 'reactstrap';

import './List.css';
import Task from './Task';

function TaskList(props) {
    const tasks = props.tasks;
    const listItems =  tasks.map((task) =>
        <Task
            key={task.id}
            name={task.name}
            status={task.status}
            description={task.description}
            priority={task.priority}
            subtasks={task.subtasks}/>
    );
    return (
        <div>{listItems}</div>
    );
}

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "0000",
            name: "My Tasks",
            tasks: [
                {id: "0", name: "Basic Task", status: false,
                    subtasks: []},
                {id: "1", name: "Task with Subtasks", status: false,
                    subtasks: ["Subtask 0", "Subtask 1"]}
            ],
            modal: false
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <header className="List-header">
                    <h4>{this.state.name}</h4>
                </header>
                <main>
                    <TaskList tasks={this.state.tasks}/>
                    <Table>
                        <tr>
                            <td>
                                <a href onClick={this.toggle}>
                                    + Add Task
                                </a>
                            </td>
                        </tr>
                    </Table>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Add Task</ModalHeader>
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
                                                placeholder="Task Name" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="examplePriority">Priority</Label>
                                            <Input type="select">
                                                <option>Select Priority</option>
                                                <option>Low</option>
                                                <option>Medium</option>
                                                <option>High</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="exampleDescription">Description</Label>
                                    <Input
                                        type="text"
                                        name="description"
                                        id="exampleDescription"
                                        placeholder="Add a description to your task"/>
                                </FormGroup>
                            </Form>
                        </Container>
                        <ModalFooter>
                            <Button
                                color="primary"
                                onClick={this.toggle}>
                                Submit
                            </Button>{' '}
                            <Button
                                color="secondary"
                                onClick={this.toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </main>
            </div>
        );
    }
}

export default List;