import React from 'react';
import { Label, Input, Button } from '@/components/form';

import { Field, reduxForm } from 'redux-form';
import {
  Form,
  FormGroup,
  FormFeedback,
  FormText,
} from "reactstrap";

let SigninForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
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
      <Button type="submit" size="md" color="primary"><i className="fa fa-dot-circle-o"></i> Sign In</Button>
    </Form>
  )
}

SigninForm = reduxForm({
  form: 'signin',
  initialValues: {
    id: 'e81d2ba0-2080-11e8-a48d-c9b184077023',
    email: 'r.asmuswoelk@gmail.com',
  }
})(SigninForm)

export default SigninForm;
