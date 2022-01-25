import PropTypes from 'prop-types';

const Button = ({ type, handleClick, span }) => {
  return (
    <button type={type} onClick={handleClick}>
      {span}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
  span: PropTypes.string,
}.isRequired;

export default Button;
