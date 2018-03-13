import React, { Component } from 'react';
import Layout from '../layouts/App';
import Link from '@/components/generic/Link';
import bear from '@/static/bear.jpeg';
import Cookies from 'js-cookie';
import { bindActionCreators } from 'redux';
import withDefaults from '@/layouts/helpers/withDefaults';
import { logOut } from '@/redux/auth/actions';
import { fetchUserProfile } from '@/redux/user/actions';
import Api from '@/api/ApiHelper';
import queryString from 'query-string';

class Page extends Component {

  static async getInitialProps ({store, req, isServer }) {
    // if (isServer) {
    //   const cookies = queryString.parse(req.headers.cookie);
    //   console.log('@@@set token!', cookies.token);
    //   Api.setToken(cookies.token);
    // }
    return store.dispatch(fetchUserProfile()).then(() => {
      return {};
    });
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(Cookies.get('token'));
    // Api.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0YWdpbmcudW5pcWtleS5ldS9hcGkvbG9naW4iLCJpYXQiOjE1MjAzMzk3NjcsImV4cCI6MTUyMDM0MzM2NywibmJmIjoxNTIwMzM5NzY3LCJqdGkiOiI2U1phVDU5ZFJRVndTM3dPIiwic3ViIjoiZTgxZDJiYTAtMjA4MC0xMWU4LWE0OGQtYzliMTg0MDc3MDIzIiwicHJ2IjoiZjkzMDdlYjVmMjljNzJhOTBkYmFhZWYwZTI2ZjAyNjJlZGU4NmY1NSIsImRldmljZSI6ImU4OWVlNDkwLTIwODAtMTFlOC1iMTYwLTYzMDkwZGYyMDEwOSJ9.W19re_FANerNUqaXh7MDhflHulvzlxt5duoV5jP6Udc';
    // this.props.fetchUserProfile();
  }
  render() {
    return (
      <Layout>
        <h1>Hello {this.props.user && this.props.user.name}</h1>
        <p>This is the about page. Go to <Link href="/account"><a>Account</a></Link></p>
        <button onClick={this.props.logOut}>Sign out</button>
      </Layout>
    );
  }
}

export default withDefaults(Page, {
  mapStateToProps: state => state,
  mapDispatchToProps: { logOut, fetchUserProfile },
});
