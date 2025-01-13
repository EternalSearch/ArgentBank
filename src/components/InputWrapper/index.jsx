import PropTypes from "prop-types";

const InputWrapper = ({
  label = null, 
  inputType,
  id,
  value,
  onChange,
  error,
  disabled = false,
  readOnly = false, 
}) => {
  return (
    <div>
      <div className="input-wrapper">
        <label htmlFor={id}>{label}</label>{" "}
        <input
          type={inputType}
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled} 
          readOnly={readOnly} 
        />
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

InputWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool, 
  readOnly: PropTypes.bool, 
};

export default InputWrapper;