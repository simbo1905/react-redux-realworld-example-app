/**
 * Fluid Checkbox
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from './FluidCheckbox.scss';

const FluidCheckbox = ({
  label,
  className,
  meta,
  id,
  input,
  ...rest,
}) => {
  const wrapClasses = classnames(
    css.wrap,
    { [css.hasError]: meta.error && meta.submitFailed },
    className
  );

  return (
    <div className={wrapClasses}>
      <input
        id={id}
        {...input}
        type="checkbox"
        className={css.input}
      />
      <label className={css.label} htmlFor={id}>
        <div className={css.circle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.7 22.6"><title>print</title><path d="M12.2 14.2c-.4.4-1 .4-1.4 0L4.2 7.7 0 12l7.2 7.2L10 22c.8.8 2.2.8 3 0L30.7 4.2 26.5 0 12.2 14.2z" /></svg>
        </div>
        <div className={css.labelText}>{label}</div>
      </label>
    </div>
  );
};

FluidCheckbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  meta: PropTypes.object.isRequired,
  id: PropTypes.string,
  input: PropTypes.object.isRequired,
};

export default FluidCheckbox;
