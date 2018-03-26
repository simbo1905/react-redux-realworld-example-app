/**
 * 404 - Page Not Found
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function PageNotFound() {
  return (
    <div>
      <Helmet>
        <title>PageNotFound</title>
        <meta name="description" content="Description of PageNotFound" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default PageNotFound;
