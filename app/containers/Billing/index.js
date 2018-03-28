/**
 *
 * Billing
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  FormGroup,
  Label,
  Input,
  InputGroup,
  ListGroup,
  ListGroupItem,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';

import injectSaga from 'utils/injectSaga';
import makeSelectBilling from './redux/selectors';
import saga from './redux/saga';

export class Billing extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Billing</title>
        </Helmet>
        <h3 className="my-3">
          Billing
        </h3>
        <Row>
          <Col>
            <Card xs="6">
              <CardHeader>
                Update card information
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Credit Card Number</Label>
                      <InputGroup className="rounded-left">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-credit-card"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id="ccnumber" placeholder="0000 0000 0000 0000" value="XXXX XXXX XXXX 1754" required className="rounded-right" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Month</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccyear">Year</Label>
                      <Input type="select" name="ccyear" id="ccyear">
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="cvv">CVV/CVC</Label>
                      <Input type="text" id="cvv" placeholder="123" required className="rounded" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">
                        Name of card holder
                      </Label>
                      <Input type="text" id="name" placeholder="Enter the full name of the credit card holder" required className="rounded" />
                    </FormGroup>
                  </Col>
                </Row>
                <Button className="float-right m-2" type="submit" size="sm" color="success">
                  Submit
                </Button>
                <Button className="float-right m-2" type="submit" size="sm" color="danger">
                  Remove Card
                </Button>
              </CardBody>
              <CardFooter>
                <small className="text-muted">
                  Secure payment powered by Stripe.
                </small>
              </CardFooter>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader>
                Past Invoices
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem>Invoice for Feb 2018 - <strong>350,00 DKK</strong> <a href=""><i className="fa fa-file-pdf-o float-right"></i></a></ListGroupItem>
                  <ListGroupItem>Invoice for Jan 2018 - <strong>315,00 DKK</strong> <a href=""><i className="fa fa-file-pdf-o float-right"></i></a></ListGroupItem>
                  <ListGroupItem>Invoice for Dec 2017 - <strong>315,00 DKK</strong> <a href=""><i className="fa fa-file-pdf-o float-right"></i></a></ListGroupItem>
                  <ListGroupItem>Invoice for Nov 2017 - <strong>315,00 DKK</strong> <a href=""><i className="fa fa-file-pdf-o float-right"></i></a></ListGroupItem>
                  <ListGroupItem>Invoice for Oct 2017 - <strong>140,00 DKK</strong> <a href=""><i className="fa fa-file-pdf-o float-right"></i></a></ListGroupItem>
                  <ListGroupItem>Invoice for Sep 2017 - <strong>35,00 DKK</strong> <a href=""><i className="fa fa-file-pdf-o float-right"></i></a></ListGroupItem>
                </ListGroup>
              </CardBody>
              <CardFooter className="text-center">
                <small className="text-muted">
                  No more entries.
                </small>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}


Billing.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  billing: makeSelectBilling(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'billing', saga });

export default compose(
  withSaga,
  withConnect,
)(Billing);
