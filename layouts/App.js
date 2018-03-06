/**
 * Main layout
 */

import React from 'react';
import { Container } from 'reactstrap';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import Base from './Base';

export default ({ children }) => (
  <Base>
    <Header />
    <div className="app-body">
      <Sidebar />
      <main className="main">
        <Container fluid>
          {children}
        </Container>
      </main>
    </div>
    <Footer />
  </Base>
);
