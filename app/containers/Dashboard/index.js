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

import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

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
              <h1 className="display-5">
                <FormattedMessage {...messages.welcome} values={{name}} />
              </h1>
              <p className="lead">
                <FormattedMessage {...messages.threeSteps } />
              </p>
              <hr className="my-2" />
              <p><FormattedMessage {...messages.firstStep } /></p>
              <p><FormattedMessage {...messages.secondStep } /></p>
              <p><FormattedMessage {...messages.thirdStep } /></p>
              <Button color="primary"><FormattedMessage {...messages.learnMore } /></Button>
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
