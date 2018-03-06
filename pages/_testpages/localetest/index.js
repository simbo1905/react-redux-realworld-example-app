import React from 'react';
import Link from 'next/link';
import i18n from '@/config/i18n';
import withDefaults from '@/layouts/helpers/withDefaults';
import Page from '@/layouts/App';

function Home(props) {
  const { t } = props;
  console.log('props!!!', props);
  return (
    <Page>
      Hello {props.user.name}!
      { t ? t('welcome') : null}
      <Link href="/redux"><a>Go to redux</a></Link>
    </Page>
  );
}

Home.getInitialProps = () => {
   return {};
 }

export default withDefaults(Home, {
  mapStateToProps: state => state,
  translations: ['home', 'common']
});
