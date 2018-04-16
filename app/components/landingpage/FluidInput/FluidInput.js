/**
 * Fluid Input
 *
 * Made to work with redux-form
 */

import React from 'react';
import classnames from 'classnames';
import css from './FluidInput.scss';

/* eslint-disable */
const FluidInput = ({
  input,
  meta,
  ...rest
}) => {
  const classNames = classnames(
    'form-control',
    css.input,
  );
  return (
    <div className={css.formGroup}>
       <input {...rest} {...input} className={classNames} />
    </div>
  );
};

export default FluidInput;
