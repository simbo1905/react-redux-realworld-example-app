/**
 * Input Component
 *
 * Made ready for redux-form's <Field> component
 * but can be used as a standalone component as well
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Input as BootstrapInput } from 'reactstrap';

const propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]),
};

const Input = ({
  meta,
  input,
  children,
  ...rest
}) => (
  <BootstrapInput
    {...input}
    {...rest}
  >
    {children}
  </BootstrapInput>
);

Input.propTypes = propTypes;

export default Input;
