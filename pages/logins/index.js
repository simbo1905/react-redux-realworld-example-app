/**
 * Page: Logins
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux'
 import withDefaults from '@/layouts/helpers/withDefaults';
 import Layout from '@/layouts/App';

 class Logins extends Component {
   constructor(props) {
     super(props);
   }

   render() {
     return (
       <Layout>
        Logins content here..
       </Layout>
     )
   }
 };

export default withDefaults(Logins, {
  translations: ['logins'],
  guarded: true,
});
