/**
 * Passwords
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withGuard from 'utils/withGuard';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Label,
  Input,
  Button,
} from 'reactstrap';

import facebookAvatar from 'static/images/avatars/facebook.png';
import googleAvatar from 'static/images/avatars/google.jpg';
import githubAvatar from 'static/images/avatars/github.png';
import googleCalendarAvatar from 'static/images/avatars/googlecalendar.png';
import linkedinAvatar from 'static/images/avatars/linkedin.png';
import instagramAvatar from 'static/images/avatars/instagram.jpg';
import mailchimpAvatar from 'static/images/avatars/mailchimp.png';
import office365Avatar from 'static/images/avatars/office365-256.png';
import wordpressAvatar from 'static/images/avatars/wordpress.png';
import salesforceAvatar from 'static/images/avatars/salesforce.png';
import twitterAvatar from 'static/images/avatars/twitter.png';
import skypeAvatar from 'static/images/avatars/skype.png';
import appleAvatar from 'static/images/avatars/apple.png';
import dropboxAvatar from 'static/images/avatars/dropbox.png';

import injectSaga from 'utils/injectSaga';
import makeSelectPasswords from './redux/selectors';
import saga from './redux/saga';

export class PagePasswords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      large: false,
      dropdownOpen: false,
    };
  }

  toggleLarge = () => {
    this.setState({
      large: !this.state.large,
    });
  }

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Passwords</title>
        </Helmet>
        <h3 className="my-3">
          Passwords
        </h3>
        <Card>
          <CardHeader>
            <Row>
              <Col className="col-sm-10 col-md-8">
                <Input className="rounded" placeholder="Password filter.." />
              </Col>
              <Col className="col-sm-2 col-md-4 align-self-center">
                <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} className="float-right list-style-none">
                  <DropdownToggle nav caret>
                    <i className="icon-lock" />  Password
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={this.toggleLarge}>
                      Add password
                    </DropdownItem>
                    <DropdownItem>Select password</DropdownItem>
                    <DropdownItem>Delete selected</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row className="pb-3">
              <Col>
                <div className="message table-hover">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={wordpressAvatar} className="img-avatar" alt="Wordpress" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Wordpress</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    yo@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={githubAvatar} className="img-avatar" alt="Wordpress" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">GitHub</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    dev@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={salesforceAvatar} className="img-avatar" alt="Wordpress" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1 danger">WEAK</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Salesforce</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                  info@cool.me, sales@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={facebookAvatar} className="img-avatar" alt="Wordpress" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">
                      Strong
                    </small>
                  </div>
                  <div className="text-truncate font-weight-bold">Facebook</div>
                  <small className="text-muted">
                    <i className="icon-user"></i> yo@cool.me
                  </small>
                </div>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={mailchimpAvatar} className="img-avatar" alt="Wordpress" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Mailchimp</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    yo@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={googleAvatar} className="img-avatar" alt="Google" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Google - develop team</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    dev@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={googleCalendarAvatar} className="img-avatar" alt="Wordpress" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1 danger">WEAK</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Marketing Calendar</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    yo@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={googleAvatar} className="img-avatar" alt="Google" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Google - marketing</div>
                  <small className="text-muted"><i className="icon-user"></i> yo@cool.me
                  </small>
                </div>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={twitterAvatar} className="img-avatar" alt="Twitter" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Twitter</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    yo@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={googleCalendarAvatar} className="img-avatar" alt="Google" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Main calendar</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    info@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={linkedinAvatar} className="img-avatar" alt="LinkedIn" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1 danger">WEAK</small>
                  </div>
                  <div className="text-truncate font-weight-bold">LinkedIn</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    info@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={office365Avatar} className="img-avatar" alt="Office365" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Office365</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    info@cool.me
                  </small>
                </div>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={instagramAvatar} className="img-avatar" alt="Instagram" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Instagram</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    yo@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={skypeAvatar} className="img-avatar" alt="Skype" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Skype, developers</div>
                  <small className="text-muted"><i className="icon-user"></i> dev@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={skypeAvatar} className="img-avatar" alt="Skype" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1 danger">WEAK</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Skype, main</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    info@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={googleAvatar} className="img-avatar" alt="Google" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">
                      Strong
                    </small>
                  </div>
                  <div className="text-truncate font-weight-bold">Google, info@</div>
                  <small className="text-muted"><i className="icon-user"></i> info@cool.me
                  </small>
                </div>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={appleAvatar} className="img-avatar" alt="Instagram" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Apple ID - Johns iphone</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    admin@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={googleCalendarAvatar} className="img-avatar" alt="Calendar" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Strong</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Sales calendar</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    dev@cool.me
                  </small>
                </div>
              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={skypeAvatar} className="img-avatar" alt="Skype" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1 danger">WEAK</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Skype, marketing</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    yo@cool.me
                  </small>
                </div>

              </Col>
              <Col>
                <div className="message">
                  <div className="py-1 mr-3 float-left">
                    <div className="avatar">
                      <img src={dropboxAvatar} className="img-avatar" alt="Dropbox" />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted float-right mt-1">Weak</small>
                  </div>
                  <div className="text-truncate font-weight-bold">Dropbox</div>
                  <small className="text-muted">
                    <i className="icon-user" />
                    info@cool.me
                  </small>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Modal isOpen={this.state.large} toggle={this.toggleLarge} className="modal-lg">
          <ModalHeader toggle={this.toggleLarge}>Add new password</ModalHeader>
          <ModalBody>
            <Row className="mx-3 mb-3">
              <Col>
                <Label className="mt-1">
                  <strong>
                    Account
                  </strong>
                </Label>
                <Input className="col-md-12 mb-2 rounded border-1" required placeholder='e.g. "Accounting Calendar"' />
                <Label className="mt-1">
                  <strong>
                    User or E-mail Address
                  </strong>
                </Label>
                <Input className="col-md-12 rounded" placeholder="*DEPNDING ON WICH COMPANY IM LOGGED IN WITH, USE MY DOMAIN FROM CURRENT COMPANY*" />
                <Label className="mt-1">
                  <strong>
                    Password
                  </strong>
                </Label>
                <Input className="col-md-12 rounded" type="text" placeholder="*THIS FIELD SHOULD READ A RANDOM GENERATED PASSWORD*" />
                <Label className="mt-1">
                  <strong>
                    Domain
                  </strong>
                </Label>
                <Input className="col-md-12 rounded" placeholder="www." />
                <Label className="mt-1">
                  <strong>
                    Additional info
                  </strong>
                </Label>
                <Input className="col-md-12 rounded" type="textarea" />
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
  passwords: makeSelectPasswords(),
});

const withConnect = connect(mapStateToProps);
const withSaga = injectSaga({ key: 'passwords', saga });

export default compose(
  withSaga,
  withConnect,
  withGuard,
)(PagePasswords);
