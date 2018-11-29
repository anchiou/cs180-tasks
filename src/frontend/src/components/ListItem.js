import React from 'react';
// import { Table } from 'reactstrap';

import './List.css';

class ListItem extends React.Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>
                        {this.props.name}
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default ListItem;