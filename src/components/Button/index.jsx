import PropTypes from "prop-types";

const Button = ({ type, className,className2, text, onClick }) => {
  return (
    <button type={type} className={`${className} ${className2}`.trim()} onClick={onClick}>
      {text}{" "}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className2: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;