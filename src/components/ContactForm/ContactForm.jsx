import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Button, FormStyled, FieldStyled } from './ContactForm.styled';
import { Formik } from 'formik';

class ContactForm extends Component {
  onHandleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values.name, values.number);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.onHandleSubmit}
      >
        <FormStyled>
          <Label htmlFor="name">Name</Label>
          <FieldStyled
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Label htmlFor="number">Number</Label>
          <FieldStyled
            type="tel"
            id="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit">Add Contact</Button>
        </FormStyled>
      </Formik>
    );
  }
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;
