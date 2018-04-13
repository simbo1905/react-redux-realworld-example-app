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

import Avatar2 from 'static/images/avatars/2.jpg';

import {
  attachedUsersRequest,
  inviteUserRequest,
  detachUserRequest,
} from '../../api/requests/groups';


class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: '',
      inviteError: '',
      users: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.inviteUser = this.inviteUser.bind(this);
    this.fetchAttachedList = this.fetchAttachedList.bind(this);
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
    this.fetchAttachedList();
  }
  hide() {
    this.setState({
      modal: false,
    });
  }
  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  fetchAttachedList() {
    const {
      groups,
    } = this.props;
    const group = groups.current;

    console.log('fetchAttachedList');
    this.setState({ users: [] });
    return attachedUsersRequest(group.id)
      .then((response) => {
        this.setState({ users: response.data });
      });
  }

  inviteUser() {
    const {
      groups,
    } = this.props;
    const group = groups.current;

    console.log('inviteUser');
    return inviteUserRequest(group.id, this.state.email)
      .then((response) => {
        if (response.status === 201) {
          this.setState({ inviteError: '', email: '' });
          this.fetchAttachedList();
        } else {
          this.setState({ inviteError: response.data.message || response.statusText });
        }
      })
      .catch((error) => {
        console.log('error');
        console.log(error);
      });
  }

  detachUser(userId) {
    const {
      groups,
    } = this.props;
    const group = groups.current;

    return detachUserRequest(group.id, userId)
      .then((response) => {
        if (response.status === 200) {
          this.fetchAttachedList();
        } else {
          this.setState({ inviteError: response.data.message || response.statusText });
        }
      })
      .catch((error) => {
        console.log('error');
        console.log(error);
      });
  }

  render() {
    const {
      groups,
    } = this.props;
    const group = groups.current;

    if (!this.state.modal) {
      return '';
    }

    return (
      <Modal isOpen={this.state.modal} toggle={() => { this.toggle(); }} className="modal-lg">
        <ModalHeader toggle={() => { this.toggle(); }}>
          <strong>{group.name}</strong>
          <div>{group.description}</div>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col sm="2">
              Users <a href="#" onClick={() => this.fetchAttachedList()}>refresh</a>
            </Col>
            <Col sm="10">
              <Row>
                {this.state.users.map((user) =>
                  (<Col key={user.id} sm={4} className="mb-3">
                    <div className="message table-hover" onClick={() => { if (window.confirm('Detach this user?')) this.detachUser(user.id); }} style={{ cursor: 'pointer' }}>
                      <div className="py-1 mr-3 float-left">
                        <div className="avatar">
                          <img src={Avatar2} className="img-avatar" alt={user.name} />
                        </div>
                      </div>
                      <div>
                        <small className="text-muted float-right mt-1">Strong</small>
                      </div>
                      <div className="text-truncate font-weight-bold">
                          {user.name}
                      </div>
                      <small className="text-muted">
                        <span className={user.status !== 'active' ? 'text-danger' : ''}>
                          <i className="icon-user" /> {user.email}
                        </span>
                      </small>
                      {/* <small className="text-muted"> */}
                      {/* <i className="icon-shield" /> 92% */}
                      {/* </small> */}
                      {/* <small className="text-muted"> */}
                      {/* <i className="icon-lock" /> 5 */}
                      {/* </small> */}
                    </div>
                   </Col>))}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>Invite User</Col>
            <Col sm={6}>
              <Input name="userEmail" placeholder="User email" value={this.state.email} onChange={this.handleChange} />
              <div className="danger">
                {this.state.inviteError}
              </div>
            </Col>
            <Col sm={2}>
              <Button color="primary" onClick={this.inviteUser}>Invite</Button>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" type="submit" >Edit Users</Button> */}
          {/* <Button color="warning" onClick={() => { this.hide(); }}>Delete Group</Button> */}
          <Button color="secondary" onClick={() => { this.hide(); }}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

InfoForm.propTypes = {
  groups: PropTypes.object,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'group-info-form', // a unique identifier for this form
})(InfoForm);
