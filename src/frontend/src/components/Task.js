import React from'react';
import {
    Collapse,
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
                        <span class="pretty p-default p-round">
                            <input
                                type="checkbox"
                                defaultChecked={subtask.status} />
                            <span class="state p-success-o">
                                <label>{subtask.name}</label>
                            </span>
                        </span>
                    </td>
                    <td align="right">
                        <div class="icon menu gear_menu">
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
    );
    return (
        <div>{listItems}</div>
    );
}

class Task extends React.Component {
    constructor(props) {
        super(props);

        console.log("Task props----", this.props);

        this.state = {
            collapse: false
        };
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    updateStatus = () => {
        console.log("----OnClick UpdateStatus");
        var taskRef = db.collection("tasks").doc(this.props.id);
        console.log(taskRef);

        taskRef.update({
            status: !taskRef.status
        })
            .then(function() {
                console.log("Status successfully updated!");
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }

    updateTask = () => {
        db.collection("tasks").doc(this.props.id).update({
            capital: true // TODO: make edit form
        })
            .then(function() {
                console.log("Document successfully updated!");
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }

    deleteTask = () => {
        var taskRef = db.collection("tasks").doc(this.props.id);
        taskRef.delete()
            .then(() => {
                console.log("--------deleteTask Success");
                this.setState({collapse: true});
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
                        <tr>
                            <div className="Table-data" >
                                <span class="pretty p-default p-round">
                                    <input
                                        type="checkbox"
                                        onClick={this.updateStatus}
                                        defaultChecked={this.props.status} />
                                    <span class="state p-success-o">
                                        <label>{this.props.name}</label>
                                    </span>
                                </span>
                            </div>
                            <td align="right">
                                <div
                                    class="icon menu gear_menu"
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
                                <div>
                                    <Collapse isOpen={this.state.collapse}>
                                        <tbody>
                                            <tr>
                                                <td onClick={this.deleteTask}>
                                                    Delete Task
                                                </td>
                                            </tr>
                                            <tr>
                                                <td onClick={this.updateTask}>
                                                    Edit Task
                                                </td>
                                            </tr>
                                            <tr>
                                                <td onClick={this.addSubtask}>
                                                    Add Subtask
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Collapse>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <SubtaskList subtasks={this.props.subtasks} />
            </div>
        );
    }
}

export default Task;