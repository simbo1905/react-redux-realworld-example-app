/**
 * Page: Tools
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux'
 import withDefaults from '@/layouts/helpers/withDefaults';
 import Layout from '@/layouts/App';

 class Tools extends Component {
   constructor(props) {
     super(props);
   }

   render() {
     return (
       <Layout>
        Tools content here..
       </Layout>
     )
   }
 };

export default withDefaults(Tools, {
  translations: ['tools'],
  guarded: true,
});
