import Proptypes from 'prop-types';

const Input = ({ type, id, value, handleChange, className }) => {
  return (
    <label htmlFor={id}>
      <span>{value}</span>
      <input
        type={type}
        name={value}
        value={value}
        className={className}
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
  className: Proptypes.string,
}.isRequired;

export default Input;
