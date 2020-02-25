import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/itemActions'
const ItemModal = (props) => {
    const [state, setState] = useState({
        modal: false,
        name: ''
    }, [props.addItem])
    const toggle = () => {
        setState({ ...state, modal: !state.modal })
    }
    const onchange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const onsubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: state.name
        }
        props.addItem(newItem)
        toggle()
    }
    return (
        <div>
            <Button
                color='dark'
                style={{ marginBottom: '2rem' }}
                onClick={toggle}
            >Add Item
            </Button>
            <Modal isOpen={state.modal} toggle={toggle} >
                <ModalHeader toggle={toggle} >
                    Add to Shopping List
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={onsubmit}>
                        <FormGroup>
                            <Label for="name">Item Name</Label>
                            <Input type='text' name='name' id='item' placeholder='Item Name' onChange={onchange} />
                        </FormGroup>
                        <Button color='dark' style={{ marginTop: '2rem' }} block>Add Item</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
const mapStateToProps = state => ({
    item: state.item
})
export default connect(mapStateToProps, { addItem })(ItemModal);