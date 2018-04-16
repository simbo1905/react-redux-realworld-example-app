/**
 * Groups
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withGuard from 'utils/withGuard';
import GroupForm from './GroupForm';
import InfoForm from './InfoForm';
import { saveGroupRequestAPI } from 'api/requests/groups';
import { bindActionCreators } from 'redux';


import {
  fetchOrganizationsList,
  changeCurrentOrganization,
} from '../Organizations/redux/actions';

import {
  groupsListRequested,
  groupCreateRequested,
  groupRemoveRequested,
} from './redux/actions';

import AvatarBlank from 'static/images/avatars/avatar-blank.svg';

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
  Input, Button,
} from 'reactstrap';

import injectSaga from 'utils/injectSaga';
import groupSaga from './redux/saga';
import organizationSaga from '../Organizations/redux/saga';


// eslint-disable-line react/prefer-stateless-function
export class Groups extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
    };
  }

  componentDidMount() {
    this.props.fetchOrganizationsList();
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  createGroup() {
    this.props.loadGroupData({ organization_id: this.props.organizations.currentId });
    this.show();
  }
  editGroup(group) {
    this.props.loadGroupData(group);
    this.show();
  }
  removeGroup(id) {
    this.props.removeGroup(id);
  }
  show() {
    this.groupForm.wrappedInstance.show();
  }
  hide() {
    this.groupForm.wrappedInstance.hide();
  }
  showGroupInfo(index) {
    this.props.groups.current = this.props.groups.list[index];
    console.log(this.infoForm.wrappedInstance.props);
    this.infoForm.wrappedInstance.show(this.props.groups.current);
  }

  onSubmit = (values) => saveGroupRequestAPI(values).then(() => {
    this.hide();
    this.props.groupsListRequested(this.props.organizations.currentId);
  });

  render() {
    const {
      organizations,
      groups,
      onOrganizationChanged,
    } = this.props;

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
              <Col sm="1" className="align-self-center">Organization</Col>
              <Col sm="9">
                <Input className="rounded" type="select" name="select" id="organization" onChange={onOrganizationChanged}>
                  {organizations.list.map((organization) => <option key={organization.id} value={organization.id}>{organization.name}</option>)}
                </Input>
              </Col>
            </Row>
          </CardHeader>
          <CardHeader>
            <Row>
              <Col sm="10">
                <Input type="text" className="col-md-12 mr-3 rounded" placeholder="Group filter.." />
              </Col>
              <Col sm="2" className="align-self-center">
                <Dropdown nav isOpen={this.state.dropdownOpen} toggle={() => { this.toggleDropDown(); }} className="float-right list-style-none">
                  <DropdownToggle nav caret>
                    <i className="icon-people" /> Groups
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Login Rules</DropdownItem>
                    <DropdownItem onClick={() => { this.createGroup(); }}>Add group</DropdownItem>
                    <DropdownItem>Time Based</DropdownItem>
                    <DropdownItem>IP address / range</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row>
              {groups.list.map((group, index) =>
                (<Col key={group.id} xs="12" sm="6" md="6" lg="4" xl="3" xxl="1" className="mb-3">
                  <div className="message" onClick={() => { this.showGroupInfo(index); }} style={{ cursor: 'pointer' }}>
                    <div className="py-1 mr-3 float-left">
                      <div className="avatar">
                        <div className="avatar-letter">{group.name[0].toLowerCase()}</div>
                      </div>
                    </div>
                    <div>
                      <small className="text-muted float-right mt-1">
                        {group.users.filter((user) => user.status === 'active').length} user(s)<br />
                        {/* <Button onClick={() => { this.removeGroup(group); }}>[ remove ]</Button> */}
                        {/* <Button onClick={() => { this.editGroup(group); }}>[ edit ]</Button> */}
                      </small>
                    </div>
                    <div className="text-truncate font-weight-bold" title={group.description}>
                      {group.name}
                    </div>
                    <div className="avatars-stack mt-2">
                      {group.users.filter((user) => user.status === 'active').map((user) =>
                        (<div key={user.id} className="avatar avatar-s">
                          <img src={AvatarBlank} className="img-avatar" title={`${user.name} [${user.email}]`} />
                         </div>))}
                    </div>
                  </div>
                 </Col>))}
            </Row>
          </CardBody>
        </Card>

        <GroupForm value="const" onSubmit={this.onSubmit} ref={(ref) => { this.groupForm = ref; }} />
        <InfoForm {...this.props} ref={(ref) => { this.infoForm = ref; }} />

      </div>
    );
  }
}

Groups.propTypes = {
  organizations: PropTypes.object,
  groups: PropTypes.object,
  users: PropTypes.object,
  fetchOrganizationsList: PropTypes.func,
  groupsListRequested: PropTypes.func,
  onOrganizationChanged: PropTypes.func,
  loadGroupData: PropTypes.func,
  saveGroup: PropTypes.func,
  removeGroup: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchOrganizationsList,
  groupsListRequested,
  onOrganizationChanged: (event) => {
    dispatch(changeCurrentOrganization(event.target.value));
    dispatch(groupsListRequested(event.target.value));
  },
  loadGroupData: (group) => dispatch(initialize('group-form', group)),
  groupRemoveRequested,
}, dispatch);

const mapStateToProps = (state) => ({
  groups: state.groups,
  organizations: state.organizations,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withGroupSaga = injectSaga({ key: 'groups', saga: groupSaga });
const withOrganizationSaga = injectSaga({ key: 'organizations', saga: organizationSaga });

export default compose(
  withGroupSaga,
  withOrganizationSaga,
  withConnect,
  withGuard,
)(Groups);
