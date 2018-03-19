/**
 * App Layout
 */

  import React from 'react';
  import PropTypes from 'prop-types';
  import { Container } from 'reactstrap';

  import Footer from './components/Footer';
  import Header from './components/Header';
  import Sidebar from './components/Sidebar';
  // import Breadcrumb from './components/Breadcrumb';

  const App = ({ children, ...rest }) => (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar {...rest} />
        <main className="main">
          <Container fluid>
            { children }
          </Container>
        </main>
      </div>
      <Footer />
    </div>
  );

  App.propTypes = {
    children: PropTypes.element,
  };

  export default App;
