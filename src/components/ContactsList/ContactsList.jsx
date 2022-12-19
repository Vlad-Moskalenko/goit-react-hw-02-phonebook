import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactsList = ({ contactsList, filter, onDeleteContact }) => (
  <ul className={css.contacts}>
    {contactsList.map(
      ({ id, name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) && (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        )
    )}
  </ul>
);

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
