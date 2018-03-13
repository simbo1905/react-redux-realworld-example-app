/**
 * Sidebar
 */
import React from 'react';
import { Badge, Nav, NavItem } from 'reactstrap';
import withTranslations from '@/layouts/helpers/withTranslations';
import { translate } from 'react-i18next';
import i18n from '@/config/i18n';
import Link from 'next/link';

const Sidebar = (props) => {
  const { t } = props;
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <Nav>
          <NavItem>
            <Link href="/">
              <a className="nav-link">
                { t('common:pages.dashboard') }
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/logins">
              <a className="nav-link">
              { t('common:pages.logins') }
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/users">
              <a className="nav-link">
              { t('common:pages.users') }
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/teams">
              <a className="nav-link">
              { t('common:pages.teams') }
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/reports">
              <a className="nav-link">
              { t('common:pages.reports') }
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/tools">
              <a className="nav-link">
              { t('common:pages.tools') }
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/settings">
              <a className="nav-link">
              { t('common:pages.settings') }
              </a>
            </Link>
          </NavItem>
        </Nav>
      </nav>
    </div>
  );
};

export default translate(['common'], { i18n, wait: false })(Sidebar);
