/**
 * Redux example page
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux'
 import withDefaults from '@/layouts/helpers/withDefaults';
 import { bindActionCreators } from 'redux';
 import { setUser } from '@/redux/user/actions';
 import Link from '@/components/generic/Link';

 class Page extends Component {
   constructor(props) {
     super(props);
   }

   static async getInitialProps({ req }) {
     return {};
   }

   componentDidMount() {
    this.props.setUser({
      name: 'Johnny',
    });
   }
   render() {
     console.log('Props', this.props);
     const { t } = this.props;
     return (
       <div>
       { t ? <h1>{t('welcome')}</h1> : null}
        Hello {this.props.user.name}!

        <Link href="/localetest"><a>Go to locale test</a></Link>
       </div>
     )
   }
 };

export default withDefaults(Page, {
  mapStateToProps: (state) => state,
  mapDispatchToProps: { setUser },
  translations: ['home'],
});
