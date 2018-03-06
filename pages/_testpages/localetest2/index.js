import React from 'react';
import withTranslations from '@/layouts/helpers/withTranslations';

function Home(props) {
  console.log('props', props);
  return (
    <div>
      {props.yo}
    </div>
  );
}

export default withTranslations(Home, { translations: ['home', 'common'] });
