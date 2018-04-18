/**
 * Fluid Message
 *
 * Renders a message in a fluid form (error, success etc.)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import css from './FluidMessage.scss';

const FluidMessage = ({
  translationId,
  translationObject,
  children,
  type,
  className,
}) => {
  const classes = classnames(
    css.fluidMessage,
    { [css[type]]: type },
    className,
  );

  // Defaults to text
  let message = children;

  // If a translation ID is supplied
  if (translationId) {
    message = (<FormattedMessage id={translationId} />);
  }

  // If a translation object is suplied
  if (translationObject) {
    message = (<FormattedMessage {...translationObject} />);
  }

  return (
    <div className={classes}>
      {message}
    </div>
  );
};

FluidMessage.propTypes = {
  className: PropTypes.string,
  translationId: PropTypes.string,
  translationObject: PropTypes.object,
  children: PropTypes.node,
  type: PropTypes.oneOf(['success', 'error', 'warning']),
};

PropTypes.defaultProps = {
  type: 'error',
};

export default FluidMessage;
