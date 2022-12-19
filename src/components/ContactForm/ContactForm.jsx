import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

import { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactsForm extends Component {
  state = { ...INITIAL_STATE };

  onChangeInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmitForm = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { number, name } = this.state;
    const { onChangeInput, onSubmitForm } = this;

    return (
      <form onSubmit={onSubmitForm}>
        <label className={css.inputWrapper}>
          Name
          <input
            onChange={onChangeInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required
          />
        </label>
        <label className={css.inputWrapper}>
          Number
          <input
            onChange={onChangeInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
