/**
 *
 * Dashboard
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withGuard from 'utils/withGuard';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { Row, Col, Jumbotron, Button } from 'reactstrap';

import { makeSelectProfile } from 'containers/Profile/redux/selectors';
import { fetchProfile } from 'containers/Profile/redux/actions';

export class Dashboard extends Component {
  static propTypes = {
    fetchProfile: PropTypes.func.isRequired,
    profile: PropTypes.shape({
      name: PropTypes.string,
    }),
  }

  componentDidMount() {
    this.props.fetchProfile();
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
              <hr className="my-2" />
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

/**
 * Redux
 */
const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchProfile,
}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withGuard)(Dashboard);
