import React from 'react';
import { Label, Input, Button } from '@/components/form';

import { Field, reduxForm } from 'redux-form';
import {
  Form,
  FormGroup,
  FormFeedback,
  FormText,
} from "reactstrap";

let SignUpForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Field
          component={Input}
          type="name"
          id="name"
          name="name"
          placeholder="Enter your name"
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
      <Button type="submit" size="md" color="primary"><i className="fa fa-dot-circle-o"></i> Sign up</Button>
    </Form>
  )
}

SignUpForm = reduxForm({
  form: 'signup',
})(SignUpForm)

export default SignUpForm;
