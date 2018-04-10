import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Row,
  Col,
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import PropTypes from 'prop-types';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  show() {
    this.setState({
      modal: true,
    });
  }
  hide() {
    this.setState({
      modal: false,
    });
  }


  render() {
    const {
      error, submitting, handleSubmit,
    } = this.props;

    return (
      <Modal isOpen={this.state.modal} toggle={() => { this.toggle(); }}>
        <ModalHeader>Create new Group</ModalHeader>
        <form onSubmit={handleSubmit} >
          <ModalBody>
            <Row>
              <Col>
                {/*<div>submitting: {submitting}</div>*/}
                {/*<div>error: {error && <strong>{error}</strong>} </div>*/}
                <input type="hidden" name="id" />
                <input type="hidden" name="organization_id" />
                <Label className="col-md-3 mt-3">Group Name*</Label>
                <Input tag={Field} component="input" name="name" className="col-md-12 my-3 py-1 rounded border-1" required placeholder="Group name" />
                <Label className="col-md-3 mt-3">Description</Label>
                <Input tag={Field} component="textarea" name="description" className="col-md-12 rounded" style={{height: 200}} />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" disabled={submitting}>Save</Button>
            <Button color="secondary" onClick={() => { this.hide(); }}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

GroupForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'group-form', // a unique identifier for this form
  fields: ['id', 'organization_id', 'name', 'description'],
})(GroupForm);
