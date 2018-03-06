import React from 'react';
import { Label, Input, Button } from '@/components/form';

import { Field, reduxForm } from 'redux-form';
import {
  Form,
  FormGroup,
  FormFeedback,
  FormText,
} from "reactstrap";

// const FormInputGroup = (props) => {
//   const { input, meta, label, ...rest } = props;
//   console.log(meta);
//   return (
//     <FormGroup>
//       <Label htmlFor={rest.id}>{label}</Label>
//       <Input
//         {...input}
//         {...rest}
//       />
//     </FormGroup>
//   );
// };

let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Your Name</Label>
        <Field
          component={Input}
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
      </FormGroup>
      <FormGroup check>
        <Label>Gender</Label><br />
        <Label check>
          <Field
            component={Input}
            type="radio"
            name="gender"
            value="male"
          />
          Male
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Field
            component={Input}
            type="radio"
            name="gender"
            value="female"
          />
          Female
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label>Skills</Label><br />
        <Label check>
          <Field
            component={Input}
            type="checkbox"
            name="skills[0]"
            value="css"
          />
          CSS
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Field
            component={Input}
            type="checkbox"
            name="skills[1]"
            value="javascript"
          />
          JavaScript
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Field
            component={Input}
            type="checkbox"
            name="skills[2]"
            value="php"
          />
          PHP
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>Favorite drink</Label>
        <Field
          component={Input}
          type="select"
          name="drink"
        >
          <option>White Russian</option>
          <option>Gin & tonic</option>
          <option>Strawberry daquiry</option>
          <option>Dark 'n' Stormy</option>
        </Field>
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <Field
          component={Input}
          type="textarea"
          id="description"
          name="description"
          placeholder="Enter a description"
        />
      </FormGroup>
      <Button type="submit" size="md" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
    </Form>
  )
}

const validate = values => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  return errors;
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'test',
  validate,
})(ContactForm)

export default ContactForm;
