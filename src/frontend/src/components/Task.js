import React from'react';
import { Table } from 'reactstrap';

import './List.css';

function SubtaskList (props) {
    const subtasks = props.subtasks;
    const listItems =  subtasks.map((subtask) =>
        <tr>
            <span class="pretty p-default p-round">
                <input type="checkbox" />
                <span class="state p-success-o">
                    <label>{subtask}</label>
                </span>
            </span>
        </tr>
    );
    return (
        <ul>{listItems}</ul>
    );
}

class Task extends React.Component {
    constructor(props) {
        super(props);

        console.log("Task props----", this.props);
    }

    render() {
        return (
            <Table className="Table-spacing">
                <tr>
                    <div className="Table-data">
                        <span class="pretty p-default p-round">
                            <input type="checkbox" />
                            <span class="state p-success-o">
                                <label>{this.props.name}</label>
                            </span>
                        </span>
                    </div>
                </tr>
                <SubtaskList subtasks={this.props.subtasks} />
            </Table>
        );
    }
}

export default Task;