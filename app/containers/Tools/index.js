/**
 *
 * Tools
 *
 */
import ipAvatar from 'static/images/avatars/ip.png';
import locationAvatar from 'static/images/avatars/location.png';
import timeAvatar from 'static/images/avatars/time.png';
import injectSaga from 'utils/injectSaga';


import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import PasswordGenerator from '../../../dummy-dash/src/components/PasswordGenerator/';

import makeSelectTools from './redux/selectors';
import saga from './redux/saga';

export class Tools extends React.Component {
constructor(props) {
    super(props);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: [false, false]
    };
  }
  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray
    });
  }
  toggleLarge() {
    this.setState({
      large: !this.state.large
    });
  }
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Tools</title>
        </Helmet>
        <h3 className="my-3">
          Tools
        </h3>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Login Rules
                <Dropdown nav isOpen={this.state.dropdownOpen[0]} toggle={() => {this.toggle(0)}} className="float-right list-style-none">
                  <DropdownToggle nav caret>
                    Add rule
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Login Rules</DropdownItem>
                    <DropdownItem onClick={this.toggleLarge}>Geo Location</DropdownItem>
                    <DropdownItem>Time Based</DropdownItem>
                    <DropdownItem>IP address / range</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardHeader>
              <CardBody>
                <Row className="py-3">
                  <Col className="">
                    <div className="message table-hover">
                      <div className="py-1 mr-3 float-left">
                        <div className="avatar">
                          <img src={locationAvatar} className="img-avatar" alt="Geo Location Rule"/>
                        </div>
                      </div>
                      <div>
                        <small className="text-muted float-right mt-1">Active</small>
                      </div>
                      <div className="text-truncate font-weight-bold">Geo Location (HQ)</div>
                      <small className="text-muted">Lat: 55.676097 | Long: 12.568337
                      </small>
                    </div>
                  </Col>
                  <Col>
                    <div className="message table-hover">
                      <div className="py-1 mr-3 float-left">
                        <div className="avatar">
                          <img src={ipAvatar} className="img-avatar" alt="IP Address Range"/>
                        </div>
                      </div>
                      <div>
                        <small className="text-muted float-right mt-1">Active</small>
                      </div>
                      <div className="text-truncate font-weight-bold">IP Range (HQ)</div>
                      <small className="text-muted">From: 214.74.310.310 | To: 214.74.310.319
                      </small>
                    </div>
                  </Col>
                  <Col>
                    <div className="message table-hover">
                      <div className="py-1 mr-3 float-left">
                        <div className="avatar">
                          <img src={timeAvatar} className="img-avatar" alt="Time Based Range"/>
                        </div>
                      </div>
                      <div>
                        <small className="text-muted float-right mt-1">Active</small>
                      </div>
                      <div className="text-truncate font-weight-bold">Time Rule (Work hours)</div>
                      <small className="text-muted">From: 8.30AM | To: 4.20PM | Days: (Mon, Tue, Wed, Tue, Fri)
                      </small>
                    </div>
                  </Col>
                  <Col>
                    <div className="message table-hover">
                      <div className="py-1 mr-3 float-left">
                        <div className="avatar">
                          <img src={locationAvatar} className="img-avatar" alt="Geo Location Rule"/>
                        </div>
                      </div>
                      <div>
                        <small className="text-muted float-right mt-1">Active</small>
                      </div>
                      <div className="text-truncate font-weight-bold">Geo Location (Johns house)</div>
                      <small className="text-muted">Lat: 55.676097 | Long: 12.568337
                      </small>
                    </div>
                  </Col>
                </Row>
                <Row className="py-3">
                  <Col>
                    <div className="message table-hover">
                      <div className="py-1 mr-3 float-left">
                        <div className="avatar">
                          <img src={ipAvatar} className="img-avatar" alt="IP Address Range"/>
                        </div>
                      </div>
                      <div>
                        <small className="text-muted float-right mt-1">Active</small>
                      </div>
                      <div className="text-truncate font-weight-bold">IP Range (Johns IP)</div>
                      <small className="text-muted">IP: 5.71.180.196
                      </small>
                    </div>
                  </Col>
                  <Col>
                    <div className="message table-hover">
                      <div className="py-1 mr-3 float-left">
                        <div className="avatar">
                          <img src={timeAvatar} className="img-avatar" alt="Time Based Range"/>
                        </div>
                      </div>
                      <div>
                        <small className="text-muted float-right mt-1">Active</small>
                      </div>
                      <div className="text-truncate font-weight-bold">Time Rule (all hours - admin and CEO only!)</div>
                      <small className="text-muted">From: 12.00AM | To: 11.59PM | Days: Mon. Tue. Wed. Tue. Fri.
                      </small>
                    </div>
                  </Col>
                  <Col>
                    <div className="message table-hover">
                      <div className="py-1 mr-3 float-left">
                        <div className="avatar">
                          <img src={ipAvatar} className="img-avatar" alt="IP Address Range"/>
                        </div>
                      </div>
                      <div>
                        <small className="text-muted float-right mt-1">Active</small>
                      </div>
                      <div className="text-truncate font-weight-bold">IP Range (Elliot Home)</div>
                      <small className="text-muted">IP: 5.71.180.196
                      </small>
                    </div>
                  </Col>
                  <Col>
                    <div className="message table-hover">
                      <div className="py-1 mr-3 float-left">
                        <div className="avatar">
                          <img src={locationAvatar} className="img-avatar" alt="Geo Location Rule"/>
                        </div>
                      </div>
                      <div>
                        <small className="text-muted float-right mt-1">Active</small>
                      </div>
                      <div className="text-truncate font-weight-bold">Geo Location (Elliot Home)</div>
                      <small className="text-muted">IP: 5.71.180.196
                      </small>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <PasswordGenerator />
        <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={'modal-lg ' + this.props.className}>
          <ModalHeader toggle={this.toggleLarge}>Add Geo Location Rule</ModalHeader>
          <ModalBody>
            *regular google maps. center of the map will be our coordinates for our geo-location rule.*
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleLarge}>Rule it</Button>{' '}
            <Button color="secondary" onClick={this.toggleLarge}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Tools.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tools: makeSelectTools(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'tools', saga });

export default compose(
  withSaga,
  withConnect,
)(Tools);
