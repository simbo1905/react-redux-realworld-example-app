/**
 * Page: Users
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux'
 import withDefaults from '@/layouts/helpers/withDefaults';
 import Layout from '@/layouts/App';

 class Users extends Component {
   constructor(props) {
     super(props);
   }

   render() {
     return (
       <Layout>
        Users content here..
       </Layout>
     )
   }
 };

export default withDefaults(Users, {
  translations: ['users'],
  guarded: true,
});
