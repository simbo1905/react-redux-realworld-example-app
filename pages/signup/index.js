import React from 'react';
import Layout from '@/layouts/Base';
import withDefaults from '@/layouts/helpers/withDefaults';
import Cookies from 'js-cookie';
import Router from 'next/router';
import queryString from 'query-string';
import SignupForm from './components/SignupForm';
import SRP6JavascriptClientSessionSHA256 from 'thinbus-srp';
import { signUp } from '@/redux/auth/actions';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (values) => {
    this.props.signUp(values).then(res => {
      console.log('[Sign up form] Sign up success!', res);
      if (res.status === 201) {
        Router.replace('/');
      }
    }).catch(res => {
      console.log('[Sign up form] Sign up error!', res);
    });
  }

  render() {
    return (
      <Layout>
        <div style={{ width: '500px', margin: 'auto', }}>
          <SignupForm
            onSubmit={this.onSubmit}
          />
        </div>
      </Layout>
    );
  }
}

export default withDefaults(Page, {
  mapStateToProps: (state) => state,
  mapDispatchToProps: { signUp },
  translations: ['home'],
});
