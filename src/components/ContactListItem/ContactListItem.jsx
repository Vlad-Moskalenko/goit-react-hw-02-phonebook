import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <li className={css.contact}>
    {name}: {number}
    <button onClick={() => onDeleteContact(id)} type="button">
      Delete
    </button>
  </li>
);
