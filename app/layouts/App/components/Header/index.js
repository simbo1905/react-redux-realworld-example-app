// eslint-disable
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  fetchOrganizationsList,
  changeCurrentOrganization,
} from 'containers/Organizations/redux/actions';

import { groupsListRequested } from 'containers/Groups/redux/actions';


import injectSaga from 'utils/injectSaga';
import organizationSaga from 'containers/Organizations/redux/saga';

class Header extends Component {
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

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    if (this.props.organizations.list.length === 0) return '';
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <NavbarBrand href="#"></NavbarBrand>

        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={() => { this.toggleDropDown(); }} className="float-right list-style-none">
          <DropdownToggle nav caret>
            <i className="icon-cup" /> {this.props.organizations.list[0].name }
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Company</DropdownItem>
            {this.props.organizations.list.map((organization) =>
              <DropdownItem key={organization.id} onClick={() => this.props.onOrganizationChanged(organization.id)}>{organization.name}</DropdownItem>)}
            <DropdownItem disabled>Add company...</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarToggler className="float-right mr-4" onClick={this.asideToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>


      </header>
    );
  }
}

Header.propTypes = {
  organizations: PropTypes.object,
  fetchOrganizationsList: PropTypes.func,
  onOrganizationChanged: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchOrganizationsList,
  changeCurrentOrganization,
  groupsListRequested,
}, dispatch);

const mapStateToProps = (state) => ({
  groups: state.groups,
  organizations: state.organizations,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withOrganizationSaga = injectSaga({ key: 'organizations', saga: organizationSaga });

export default compose(
  withOrganizationSaga,
  withConnect,
)(Header);
