/**
 *
 * Reports
 *
 */


import injectSaga from 'utils/injectSaga';

import {
  Badge,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import mapImage from '../../../dummy-dash/public/img/map.png';

import makeSelectReports from './redux/selectors';
import saga from './redux/saga';

export class Reports extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      large: false,
      danger: false,
    };

    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large
    });
  }

  toggleDanger() {
    this.setState({
      danger: !this.state.danger
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Reports</title>
        </Helmet>
        <h3 className="my-3">
          Reports
        </h3>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Table striped responsive borderless size="sm" className=" striped table resonsive col-lg ">
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th>Event</th>
                      <th>Username</th>
                      <th>Timestamp</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">999</td>
                      <td>Wordpress login request</td>
                      <td>@johnny</td>
                      <td>02:41:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">998</td>
                      <td>Github login request</td>
                      <td>@admin</td>
                      <td>02:41:59 01/02/2018</td>
                      <td><Badge color="danger">Denied</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">997</td>
                      <td>Salesforce login request</td>
                      <td>@marketingteam</td>
                      <td>01:48:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">996</td>
                      <td>Shared password for Wordpress with @johnny</td>
                      <td>@admin</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">995</td>
                      <td>Salesforce login request</td>
                      <td>@johnny</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">994</td>
                      <td>Facebook login request</td>
                      <td>@hanne</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">993</td>
                      <td>Twitter login request</td>
                      <td>@marketingteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">992</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">991</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">990</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">989</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">988</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">987</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">986</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">985</td>
                      <td>Shared password for Wordpress with @johnny</td>
                      <td>@admin</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">984</td>
                      <td>Salesforce login request</td>
                      <td>@johnny</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">983</td>
                      <td>Facebook login request</td>
                      <td>@hanne</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">982</td>
                      <td>Twitter login request</td>
                      <td>@marketingteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">981</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">980</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">979</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">978</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">977</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">976</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                    <tr onClick={this.toggleLarge}>
                      <td className="text-center">975</td>
                      <td>Economo login request</td>
                      <td>@economyteam</td>
                      <td>01:45:59 01/02/2018</td>
                      <td><Badge color="success">Granted</Badge></td>
                    </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={'modal-lg' + this.props.className}>
          <ModalHeader toggle={this.toggleLarge}>Wordpress login request granted by @johnny</ModalHeader>
          <ModalBody>
            <Table size="sm">
              <tbody>
                <tr>
                  <th>Service:</th>
                  <th><a href="#">Wordpress</a></th>
                </tr>
                <tr>
                  <th>Request:</th>
                  <th>login</th>
                </tr>
                <tr>
                  <th>User:</th>
                  <th>@johnny <small onClick={this.toggleDanger}>(revoke access to Wordpress)</small></th>
                </tr>
                <tr>
                  <th>Approved from:</th>
                  <th>Android device (MAC: 34:EI:82:B2:H5) <small onClick={this.toggleDanger}>(Blacklist device)</small></th>
                </tr>
                <tr>
                  <th>Status:</th>
                  <th><Badge color="success">Granted</Badge></th>
                </tr>
                <tr>
                  <th>User created:</th>
                  <th>08:59:59 01/02/2018</th>
                </tr>
                <tr>
                  <th>User IP:</th>
                  <th><a href="https://www.whois.com/whois/217.74.210.210">217.74.210.210</a> <small onClick={this.toggleDanger}>(Blacklist IP)</small></th>
                </tr>
                <tr>
                  <th>Geo location:</th>
                  <th><strong>Lat:</strong> 55.755826 <strong>Long:</strong> 37.6173</th>
                </tr>
              </tbody>
            </Table>
            <img src={mapImage} alt="should be a embedded google map" className="col-md-12"></img>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleLarge}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleLarge}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.danger} toggle={this.toggleDanger} className={'modal-danger ' + this.props.className}>
          <ModalHeader toggle={this.toggleDanger}>Block IP address</ModalHeader>
          <ModalBody>
          If you block the address, there will be no way for you or your team members to log in from this location. You can always undo this under your settings. Click block to block IP address.
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggleDanger}>Block</Button>{' '}
            <Button color="secondary" onClick={this.toggleDanger}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Reports.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectReports(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'reports', saga });

export default compose(
  withSaga,
  withConnect,
)(Reports);
