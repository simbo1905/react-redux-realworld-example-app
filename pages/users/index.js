/**
 * Page: Teams
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux'
 import withDefaults from '@/layouts/helpers/withDefaults';
 import Layout from '@/layouts/App';

 class Teams extends Component {
   constructor(props) {
     super(props);
   }

   render() {
     return (
       <Layout>
        Teams content here..
       </Layout>
     )
   }
 };

export default withDefaults(Teams, {
  translations: ['teams'],
  guarded: true,
});
