/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import messages from './messages';
import { getProfileRequest } from 'api/requests/user';

import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Jumbotron,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Fade,
  Table
} from 'reactstrap';

import { makeSelectProfile } from 'containers/Profile/redux/selectors';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { name, access_token } = this.props.profile;
    console.log('dashboard will mount!', access_token);
    getProfileRequest().then(res => console.log('res', res)).catch(err => console.log(err));
  }

  render() {
    const { name } = this.props.profile;
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Row>
          <Col className="col-md-8">
            <Jumbotron>
                <h1 className="display-5">Welcome back, {name}!</h1>
                <p className="lead">Get off to a great start with these 3 simple steps</p>
                <hr className="my-2"/>
                <p>1 - Download the UniqKey app on you smart device.</p>
                <p>2 - Add the first team member. Or invite them to join by e-mail</p>
                <p>3 - Create a group for easier joint access</p>
                <Button color="primary">Learn More</Button>

              </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Dashboard);
