import React from 'react';
import Layout from '@/layouts/Base';
import withDefaults from '@/layouts/helpers/withDefaults';
import Router from 'next/router';
import SigninForm from './components/SigninForm';
import SRP6JavascriptClientSessionSHA256 from 'thinbus-srp';
import { logIn } from '@/redux/auth/actions';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (values) => {
    return this.props.logIn(values).then(res => {
      console.log('Sign in success!', res);
      if (res.status === 201) {
        Router.replace('/');
      }
    }).catch(res => {
      console.log('Sign in error!', res.data);
    });
  }

  render() {
    return (
      <Layout>
        <div style={{ margin: 'auto', width: '300px'}}>
          <SigninForm
            onSubmit={this.onSubmit}
          />
        </div>
      </Layout>
    );
  }
}

export default withDefaults(Page, {
  mapStateToProps: (state) => state,
  mapDispatchToProps: { logIn },
  guarded: false,
  translations: ['login'],
});
