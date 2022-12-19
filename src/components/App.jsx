import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSearch = e => this.setState({ filter: e.target.value });

  onAddContact = ({ name, number }) => {
    if (this.isNotUniqueContact(name)) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  isNotUniqueContact = newContactName => {
    return this.state.contacts.find(
      ({ name }) => name.toLowerCase() === newContactName.toLowerCase()
    );
  };

  onDeleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const { onSearch, onAddContact, onDeleteContact } = this;
    return (
      <main className="app-wrapper">
        <Section title="Phonebook">
          <ContactForm onAddContact={onAddContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 0 ? (
            <>
              <Filter onSearch={onSearch} filter={filter} />
              <ContactsList
                contactsList={contacts}
                filter={filter}
                onDeleteContact={onDeleteContact}
              />
            </>
          ) : (
            <p>There are no contacts yet...</p>
          )}
        </Section>
      </main>
    );
  }
}
