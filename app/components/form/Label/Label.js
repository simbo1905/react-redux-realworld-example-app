/**
 * Form Label
 */

import React from 'react';
import { Label as BootstrapLabel } from 'reactstrap';
import classnames from 'classnames';
import css from './Label.scss';

export default ({ children, className, ...rest }) => ( /* eslint-disable-line */
  <BootstrapLabel {...rest} className={classnames(className, css.label)}>
    {children}
  </BootstrapLabel>
);
