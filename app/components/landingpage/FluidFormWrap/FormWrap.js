/**
 * Form Wrap for onboarding
 */

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import css from './FormWrap.scss';

const FormWrap = ({
  className,
  children,
  ...props
}) => (
  <form {...props} className={classnames(css.formWrap, className)}>
    {children}
  </form>
);

FormWrap.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FormWrap;
