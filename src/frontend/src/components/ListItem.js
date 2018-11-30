import React from 'react';
// import { Table } from 'reactstrap';
import {
    Nav,
    NavLink } from 'reactstrap';

import './List.css';

class ListItem extends React.Component {
    render() {
        return (
            <tr className="List-row">
                <td>
                    <Nav>
                        <NavLink onClick={this.props.updateListView(this.props.id)}>
                            {this.props.name}
                        </NavLink>
                    </Nav>
                </td>
            </tr>
        );
    }
}

export default ListItem;