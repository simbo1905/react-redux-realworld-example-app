/**
 * Fluid Input
 *
 * Made to work with redux-form
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import css from './FluidInput.scss';

/* eslint-disable */

class FluidInput extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Autofocus on mount
    if (this.props.autoFocus && this.input) {
      this.input.focus();
    }
  }
  render() {
    const {
      input,
      meta,
      className,
      ...rest
    } = this.props;
    const classNames = classnames(
      'form-control',
      css.input,
      { [css.hasError]: meta.error && meta.submitFailed },
      className,
    );
    return (
      <div className={css.formGroup}>
         <input {...rest} {...input} className={classNames} ref={(ref) => { this.input = ref }} />
      </div>
    );
  }
}

export default FluidInput;
