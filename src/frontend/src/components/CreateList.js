import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, ListGroup,ListGroupItem} from 'reactstrap';

class CreatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem active tag="button" action onClick={this.toggle}> + Create a new List</ListGroupItem>
                </ListGroup>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Create a new List</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="Listname">List name</Label>
                                <Input type="Listname" name="Listname" id="Listname" placeholder="Listname" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Create</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CreatList;