import React from 'react';
import Link from 'next/link';
import i18n from '@/config/i18n';
import withDefaults from '@/layouts/helpers/withDefaults';
import Page from '@/layouts/App';

import Form from './components/Form';

function Home(props) {
  const handleSubmit = (data) => {
    console.log(data);
  }

  return (
    <Page>
      <Form
        onSubmit={handleSubmit}
      />
    </Page>
  );
}

Home.getInitialProps = () => {
   return {};
 }

export default withDefaults(Home, {
  mapStateToProps: state => state,
});
