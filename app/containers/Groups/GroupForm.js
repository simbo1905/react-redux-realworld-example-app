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

export default class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    // this.toggle = this.toggle.bind(this);
    // this.show = this.show.bind(this);
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
      handleSubmit, pristine, submitting,
    } = this.props;

    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader>Create new Group</ModalHeader>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <Row>
              <Col>
                <Label className="col-md-3 mt-3">Group Name*</Label>
                <Input id="name" className="col-md-12 my-3 py-1 rounded border-1" required placeholder="Group name"/>
                <Label id="description" className="col-md-3 mt-3">Description</Label>
                <Input type="textarea" className="col-md-12 rounded" style={{height: 200}}/>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" disabled={pristine || submitting}>Save</Button>
            <Button color="secondary" onClick={this.hide}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

GroupForm.propTypes = {
  handleSubmit: PropTypes.func,
  // toggle: PropTypes.func,
  // show: PropTypes.func,
  // hide: PropTypes.func,

  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  // isOpen: PropTypes.bool,
};


// export default reduxForm({
//   form: 'group-form', // a unique identifier for this form
// })(GroupForm);
