/**
 * Fluid Button
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';
import css from './FluidButton.scss';

const FluidButton = ({
  children,
  className,
  hasArrow,
  rounded,
  loading,
  ...props
}) => {
  const buttonClasses = classnames(
    'btn',
    'btn-outline-light',
    css.button,
    { [css.rounded]: rounded },
    className,
  );

  return (
    <button type="button" className={buttonClasses} {...props} disabled={loading}>
      {
        /* loading.. */
        loading && <span><FormattedMessage id="app.common.pleasewait" defaultMessage="Please wait" />...</span>
      }
      {
        !loading && (
          <span>
            { children }
            { hasArrow && <svg className={css.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.2 39"><path d="M40.1 38c-.4 0-.9-.1-1.2-.4-.9-.7-1-1.9-.3-2.8l10.6-13.3H3c-1.1 0-2-.9-2-2s.9-2 2-2h46.1L38.4 4.3c-.7-.9-.6-2.1.3-2.8.9-.7 2.1-.6 2.8.3l13.2 16.5c.2.3.4.7.4 1 0 .5-.1.9-.4 1.4l-.1.1-12.9 16.4c-.4.5-1 .8-1.6.8z" /></svg> }
          </span>
        )
      }
    </button>
  );
};

FluidButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasArrow: PropTypes.bool,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
};

export default FluidButton;
