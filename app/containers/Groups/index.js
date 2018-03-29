/**
 * Groups
 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withGuard from 'utils/withGuard';

import Avatar1 from 'static/images/avatars/1.jpg';
import Avatar2 from 'static/images/avatars/2.jpg';
import Avatar3 from 'static/images/avatars/3.jpg';
import Avatar4 from 'static/images/avatars/4.jpg';
import Avatar5 from 'static/images/avatars/5.jpg';
import Avatar6 from 'static/images/avatars/6.jpg';
import Avatar7 from 'static/images/avatars/7.jpg';
import Avatar8 from 'static/images/avatars/8.jpg';
import AvatarD from 'static/images/avatars/d.png';
import AvatarM from 'static/images/avatars/m.png';
import AvatarA from 'static/images/avatars/a.png';
import AvatarF from 'static/images/avatars/f.png';
import AvatarS from 'static/images/avatars/s.png';
import AvatarC from 'static/images/avatars/c.png';

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
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import injectSaga from 'utils/injectSaga';
import makeSelectGroups from './redux/selectors';
import saga from './redux/saga';

export class Groups extends PureComponent { // eslint-disable-line react/prefer-stateless-function

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
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }
  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Groups</title>
        </Helmet>
        <h3 className="my-3">
          Groups
        </h3>
        <Card>
          <CardHeader>
            <Row>
              <Col className="col-sm-10">
                <Input type="text" className="col-md-12 mr-3 rounded" placeholder="Group filter.." />
              </Col>
              <Col className="col-sm-2 align-self-center">
                <Dropdown nav isOpen={this.state.dropdownOpen[0]} toggle={() => {this.toggle(0)}} className="float-right list-style-none">
                  <DropdownToggle nav caret>
                    <i className="icon-people"></i> Groups
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Login Rules</DropdownItem>
                    <DropdownItem>Add group</DropdownItem>
                    <DropdownItem>Time Based</DropdownItem>
                    <DropdownItem>IP address / range</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12" sm="6" md="4" lg="3" xl="2" xxl="1" className="mb-3">
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={AvatarM} className="img-avatar" alt="Marketing" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">8 users</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Marketing</div>
                  <div className="avatars-stack mt-2">
                    <div className="avatar avatar-xs">
                      <img src={Avatar2} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar1} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar4} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar5} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar6} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar7} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar8} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                  </div>
                </div>

              </Col>
              <Col xs="12" sm="6" md="4" lg="3" xl="2" xxl="1" className="mb-3">
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={AvatarA} className="img-avatar" alt="Group" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">2 users</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Accounting</div>
                  <small className="text-muted"><div className="avatars-stack mt-2">
                    <div className="avatar avatar-xs">
                      <img src={Avatar2} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar3} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                  </div>
                  </small>
                </div>

              </Col>
              <Col xs="12" sm="6" md="4" lg="3" xl="2" xxl="1" className="mb-3">
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={AvatarD} className="img-avatar" alt="Group" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">4 users</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Administration</div>
                  <small className="text-muted"><div className="avatars-stack mt-2">
                    <div className="avatar avatar-xs">
                      <img src={Avatar2} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar3} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar4} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar5} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                  </div>
                  </small>
                </div>

              </Col>
              <Col xs="12" sm="6" md="4" lg="3" xl="2" xxl="1" className="mb-3">
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={AvatarF} className="img-avatar" alt="Wordpress"/>
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1"></small>
                  </div>
                  <div className="text-truncate font-weight-bold">Freelancers connected</div>

                </div>

              </Col>

              <Col xs="12" sm="6" md="4" lg="3" xl="2" xxl="1" className="mb-3">
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={AvatarC} className="img-avatar" alt="Wordpress"/>
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">8 users</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Company Calendars</div>
                  <div className="avatars-stack mt-2">
                    <div className="avatar avatar-xs">
                      <img src={Avatar2} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar3} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar5} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar5} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar6} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar7} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar8} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                  </div>
                </div>

              </Col>
              <Col xs="12" sm="6" md="4" lg="3" xl="2" xxl="1" className="mb-3">
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={AvatarS} className="img-avatar" alt="Wordpress" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">4 users</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Sales</div>
                  <small className="text-muted"><div className="avatars-stack mt-2">
                    <div className="avatar avatar-xs">
                      <img src={Avatar4} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar5} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar5} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="avatar avatar-xs">
                      <img src={Avatar7} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                  </div>
                  </small>
                </div>

              </Col>
              <Col>

              </Col>
              <Col>

              </Col>
            </Row>
          </CardBody>
        </Card>

        <Modal isOpen={this.state.large} toggle={this.toggleLarge}  className={'modal-lg ' + this.props.className}>
          <ModalHeader toggle={this.toggleLarge}>Create new company</ModalHeader>
          <ModalBody>
            <Row>
              <Col>
                <Label className="col-md-3 mt-3">Company Name*</Label>
                <input className={'col-md-8 my-3 py-1 rounded border-1'} required placeholder={'BigBizz Ltd.'}></input>
                <Label className="col-md-3 mt-3 validate" type={'email'} required >Work E-mail Address*</Label>
                <input className={'col-md-8 my-3 rounded'} required  placeholder={'@big.biz'}></input>
                <Label className="col-md-3 mt-3">Company website*</Label>
                <input className={'col-md-8 my-3 rounded'} required  placeholder={'www.'}></input>
                <Label className="col-md-3 mt-3">Promo code</Label>
                <input className={'col-md-8 my-3 rounded'}   placeholder={'XXX XXX XXX'}></input>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleLarge}>Create</Button>
            <Button color="secondary" onClick={this.toggleLarge}>Cancel</Button>
          </ModalFooter>
        </Modal>


      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  groups: makeSelectGroups(),
});

const withConnect = connect(mapStateToProps);
const withSaga = injectSaga({ key: 'groups', saga });

export default compose(
  withSaga,
  withConnect,
  withGuard,
)(Groups);
