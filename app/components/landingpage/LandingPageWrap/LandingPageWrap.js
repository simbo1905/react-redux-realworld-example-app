/**
 * Landing Page wrapper
 *
 * Adds a wrap with a header which contains the logo
 * and adds gradient to the background
 *
 * This wrapper serves as a font-size control for all fluid elements
 * and is required to achieve a responsive and consistent result
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Logo from 'static/logo/logo-white.svg';
import css from './LandingPageWrap.scss';

const LandingPageWrap = ({ children, gradient, className }) => {
  const classes = classnames(
    css.wrapper,
    { [`gradient-${gradient}`]: !!gradient },
    className,
  );

  return (
    <div className={classes}>
      <div className={css.inner}>
        <div className={css.logoWrap}>
          <a href="https://www.uniqkey.eu" title="UniqKey">
            <img className={css.logo} src={Logo} alt="UniqKey" />
          </a>
        </div>
        { children }
      </div>
    </div>
  );
};

LandingPageWrap.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  gradient: PropTypes.string, // Find gradients in styles/misc/gradients.scss
};

export default LandingPageWrap;