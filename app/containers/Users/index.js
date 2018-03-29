/**
 *
 * Users
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withGuard from 'utils/withGuard';

import {
  Badge,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import Avatar1 from 'static/images/avatars/1.jpg';
import Avatar2 from 'static/images/avatars/2.jpg';
import Avatar3 from 'static/images/avatars/3.jpg';
import Avatar4 from 'static/images/avatars/4.jpg';
import Avatar5 from 'static/images/avatars/5.jpg';
import Avatar6 from 'static/images/avatars/6.jpg';
import Avatar7 from 'static/images/avatars/7.jpg';
import Avatar8 from 'static/images/avatars/8.jpg';


import injectSaga from 'utils/injectSaga';
import makeSelectUsers from './redux/selectors';
import saga from './redux/saga';

export class Users extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      large: false,
    };
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: [false, false],
    };


    this.toggleLarge = this.toggleLarge.bind(this);
  }
  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Users</title>
        </Helmet>
        <h3 className="my-3">
          Users
        </h3>
        <Card>
          <CardHeader>
            <Row>
              <Col className="col-sm-8">
                <Input className='col-md-12 mr-3 rounded' placeholder="User search.." />
              </Col>
              <Col className="col-sm-4 text-right">
                <Dropdown nav isOpen={this.state.dropdownOpen[0]} toggle={() => {this.toggle(0)}} className="float-right list-style-none">
                  <DropdownToggle nav caret>
                    <i className="icon-user" /> Users
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header></DropdownItem>
                    <DropdownItem>Add password</DropdownItem>
                    <DropdownItem>Select passwords</DropdownItem>
                    <DropdownItem>Delete selected</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
                <div className="message table-hover">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={Avatar1} className="img-avatar" alt="Wordpress"/>
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">John Deer</div>
                  <small className="text-muted">
                    <i className="icon-user" /> johnnyD@outlook.co.uk
                  </small>
                  <small className="text-muted">
                    <i className="icon-shield" /> 92%
                  </small>
                  <small className="text-muted">
                    <i className="icon-lock" /> 5
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={Avatar2} className="img-avatar" alt="Wordpress"/>
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Hanna Wichmann</div>
                  <small className="text-muted"><i className="icon-user" />  hannah@gmail.com
                  </small>
                  <small className="text-muted"> <i className="icon-shield"></i> 87%
                  </small>
                  <small className="text-muted"> <i className="icon-lock"></i> 2
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={Avatar3} className="img-avatar" alt="Wordpress"/>
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1 danger">Super Storng</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Elliot Alderson</div>
                  <small className="text-muted"><i className="icon-user" /> er2806@robot.org
                  </small>
                  <small className="text-muted"> <i className="icon-shield"></i> 100%
                  </small>
                  <small className="text-muted"> <i className="icon-lock"></i> 99+
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={Avatar4} className="img-avatar" alt="Wordpress"/>
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Ashley Patterson</div>
                  <small className="text-muted"><i className="icon-user" />  @coolme
                  </small>
                </div>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>
                <div className="success">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={Avatar5} className="img-avatar" alt="Wordpress"/>
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Pierra Umiliani</div>
                  <small className="text-muted"><i className="icon-user" />  umiliani@fox.com
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={Avatar6} className="img-avatar" alt="Wordpress"/>
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Walker Matilda Ingram</div>
                  <small className="text-muted"><i className="icon-user" /> mathilda.ingram@mail.com
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={Avatar7} className="img-avatar" alt="Wordpress"/>
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1 danger">WEAK</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Berny Tifft</div>
                  <small className="text-muted"><i className="icon-user" />  feel@thebern.cc
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={Avatar8} className="img-avatar" alt="Wordpress"/>
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Matthew Adair</div>
                  <small className="text-muted"><i className="icon-user" />  matthew@adair-family.ad

                  </small>
                </div>

              </Col>
            </Row>
          </CardBody>
        </Card>
        <span className="text-muted">Users: <Badge color="success">8</Badge> - User invites: <Badge color="warning">1</Badge> - Low security score: <Badge color="danger">2</Badge> - User awaiting approval: <Badge color="primary">9</Badge></span>
        <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={'modal-lg ' + this.props.className}>
          <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={'modal-lg ' + this.props.className}>
            <ModalHeader toggle={this.toggleLarge}>Wordpress login request granted by @johnny</ModalHeader>
            <ModalBody>
                              da
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleLarge}>Do Something</Button>
              <Button color="secondary" onClick={this.toggleLarge}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </Modal>
      </div>
    );
  }
}

Users.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'users', saga });

export default compose(
  withSaga,
  withConnect,
  withGuard,
)(Users);
