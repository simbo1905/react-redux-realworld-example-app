/**
 * Profile
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import withGuard from 'utils/withGuard';

import {
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Input,
} from 'reactstrap';

import oneAvatar from 'static/images/avatars/1.jpg';

import injectSaga from 'utils/injectSaga';
import makeSelectProfile from './redux/selectors';
import { fetchProfile } from './redux/actions';
import saga from './redux/saga';

import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';


export class Profile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    fetchProfile: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      large: false,
    };
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  componentWillMount() {
    this.props.fetchProfile();
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }


  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <h3 className="my-3">
          <FormattedMessage {...messages.header } />
        </h3>
        <Row>
          <Col md="4" className="text-center">
            <Card>
              <CardBody>
                <div className="img-avatar">
                  <img src={oneAvatar} className="img-circle by-1" alt="Username avatar" height="100" width="100" />
                </div>
                <p className="lead">John Deer</p>
                <small className="text-muted">14 <FormattedMessage {...messages.passwords } /> | 3 <FormattedMessage {...messages.groups } /> | 3 <FormattedMessage {...messages.rules } /></small>
                <hr />

                <Row className="py-3">
                  <Col sm="4" className="float-left">
                    <FormattedMessage {...messages.avgSecurity } />
                  </Col>
                  <Col sm="4" className="float-left">
                    <FormattedMessage {...messages.reusedPasswords } />
                  </Col>
                  <Col sm="4" className="float-left">
                    <FormattedMessage {...messages.accountsWithLowSecurity } />
                  </Col>
                  <Col sm="4" className="float-left">
                    100%
                  </Col>
                  <Col sm="4" className="float-left">
                    0
                  </Col>
                  <Col sm="4" className="float-left">
                    0
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="8" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  <i className="fa fa-gear"></i> <FormattedMessage {...messages.settingsTab } />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  <i className="icon-lock"></i> <FormattedMessage {...messages.passwordsTab } />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  <i className="icon-people"></i> <FormattedMessage {...messages.groupsTab } />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >
                  <i className="icon-briefcase"></i> <FormattedMessage {...messages.companiesTab } />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '5' })}
                  onClick={() => { this.toggle('5'); }}
                >
                  <i className="icon-doc"></i> <FormattedMessage {...messages.logTab } />
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="2" className="py-2 float-left">
                    <FormattedMessage {...messages.name } />
                  </Col>
                  <Col sm="10" className="py-2 float-left">
                    <Input type="text" value="John Deer" rounded className="rounded" />
                  </Col>
                  <Col sm="2" className="py-2 float-left">
                    <FormattedMessage {...messages.username } />
                  </Col>
                  <Col sm="10" className="py-2 float-left">
                    <Input type="text" placeholder="@johnny" disabled className="rounded" />
                  </Col>
                  <Col sm="2" className="py-2 float-left">
                    <FormattedMessage {...messages.email } />
                  </Col>
                  <Col sm="10" className="py-2 float-left">
                    <Input type="email" value="johnny@outlook.co.uk" className="rounded" />
                  </Col>
                  <Col sm="2" className="py-2 float-left">
                    <FormattedMessage {...messages.password } />
                  </Col>
                  <Col sm="10" className="py-2 float-left">
                    <Input type="password" value="passwordforjohnnyboy" className="rounded" />
                  </Col>
                </Row>
                <Row>
                  <Col className="text-right mt-3">
                    <Button color="primary" className="text-right"><FormattedMessage {...messages.updateProfile } /></Button>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                *list of password-items assigned for the logged in profile - shown as they are on the passwords page*
              </TabPane>
              <TabPane tabId="3">
                *list of group-items assigned for the profile - same layout as on the groups page*
              </TabPane>
              <TabPane tabId="4">
                *shows every company user is in with a company-item*
              </TabPane>
              <TabPane tabId="5">
                * You guessed it - an audit log only showing your own events *
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchProfile,
}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'profile', saga });

export default compose(
  withSaga,
  withConnect,
  withGuard,
)(Profile);
