/**
 * Fluid Header
 *
 * Full screen header that automatically adjusts text size to screen width.
 * Useful for landing pages.
 */

import React from 'react';
import PropTypes from 'prop-types';
import css from './FluidHeader.scss';

const FluidHeader = ({ title, sub }) => (
  <header className={css.fluidHeader}>
    { title && <h1 className={css.fluidHeaderTitle}>{title}</h1> }
    { sub && <h2 className={css.fluidHeaderSub}>{sub}</h2> }
  </header>
);

FluidHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  sub: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
};

export default FluidHeader;
