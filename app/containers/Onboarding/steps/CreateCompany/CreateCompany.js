/**
 * Onboarding: Create Company
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectProfile } from 'containers/Profile/redux/selectors';

import FluidHeader from 'components/landingpage/FluidHeader';
import FluidButton from 'components/landingpage/FluidButton';
import messages from './messages';

class CreateCompany extends Component { /* eslint-disable-line */
  static propTypes = {
    profile: PropTypes.object,
  }

  render() {
    const { profile: { name } } = this.props;
    return (
      <div>
        <FluidHeader
          title={<FormattedMessage {...messages.title} values={{ name }} />}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

export default connect(mapStateToProps)(CreateCompany);
