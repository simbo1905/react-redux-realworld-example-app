/**
 * Page: Reports
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux'
 import withDefaults from '@/layouts/helpers/withDefaults';
 import Layout from '@/layouts/App';

 class Reports extends Component {
   constructor(props) {
     super(props);
   }

   render() {
     return (
       <Layout>
        Reports content here..
       </Layout>
     )
   }
 };

export default withDefaults(Reports, {
  translations: ['reports'],
  guarded: true,
});
