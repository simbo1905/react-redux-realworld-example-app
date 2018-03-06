/**
 * Page: Settings
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux'
 import withDefaults from '@/layouts/helpers/withDefaults';
 import Layout from '@/layouts/App';

 class Settings extends Component {
   constructor(props) {
     super(props);
   }

   render() {
     return (
       <Layout>
        Settings content here..
       </Layout>
     )
   }
 };

export default withDefaults(Settings, {
  translations: ['settings'],
  guarded: true,
});
