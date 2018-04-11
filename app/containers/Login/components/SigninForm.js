import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'components/form';
import {
  Label,
  Button,
  Form,
  FormGroup,
} from 'reactstrap';
import { submitLoginForm } from 'containers/AuthProvider/redux/actions';

const SigninForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit(submitLoginForm)}>
    <FormGroup>
      <Label>User ID</Label>
      <Field
        component={Input}
        type="text"
        id="id"
        name="id"
        placeholder="Enter your user ID"
      />
    </FormGroup>
    <FormGroup>
      <Label>Email</Label>
      <Field
        component={Input}
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
      />
    </FormGroup>
    <FormGroup>
      <Label>Password</Label>
      <Field
        component={Input}
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
      />
    </FormGroup>
    <Button type="submit" size="lg" color="primary"><i className="fa fa-dot-circle-o"></i> Sign In</Button>
  </Form>
);

export default reduxForm({
  form: 'login',
  initialValues: {
    id: 'b93adf40-310c-11e8-bd28-753fa082566f',
    email: 'tom@petty.com',
    password: '1234',
  },
})(SigninForm);
