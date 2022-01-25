import Proptypes from 'prop-types';

const Input = ({ type, id, span, value, handleChange }) => {
  return (
    <label htmlFor={id}>
      <span>{span}</span>
      <input
        type={type}
        name={value}
        value={value}
        id={id}
        onChange={handleChange}
      />
    </label>
  );
};

Input.propTypes = {
  type: Proptypes.string,
  id: Proptypes.string,
  value: Proptypes.number,
  handleChange: Proptypes.func,
}.isRequired;

export default Input;
