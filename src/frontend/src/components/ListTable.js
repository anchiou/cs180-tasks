import React from 'react';
import { Collapse, Nav, NavLink, Table } from 'reactstrap';

class ListTable extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <Table>
                <tr>
                    <Nav>
                        <NavLink onClick={this.toggle}>My Lists</NavLink>
                    </Nav>
                </tr>
                <tr>
                    <Collapse isOpen={this.state.collapse}>
                        <td>My Tasks</td>
                    </Collapse>
                </tr>
            </Table>
        );
    }
}

export default ListTable;