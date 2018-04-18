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
import messages from './messages';
import CreateCompanyForm from './components/CreateCompanyForm';

class CreateCompany extends Component { /* eslint-disable-line */
  static propTypes = {
    profile: PropTypes.object,
  }

  render() {
    const { profile: { name } } = this.props;
    return (
      <div className="fluid-content">
        <FluidHeader
          title={<FormattedMessage {...messages.title} values={{ name }} />}
          sub={<FormattedMessage {...messages.sub} />}
        />
        <CreateCompanyForm />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

export default connect(mapStateToProps)(CreateCompany);
