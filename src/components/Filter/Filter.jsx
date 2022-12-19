import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ onSearch, filter }) => (
  <label className={css.inputWrapper}>
    Find contacts by name
    <input
      onChange={onSearch}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Contact will contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      value={filter}
      required
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
