import PropTypes from 'prop-types';

const AtomRadio = ({ onChange, label = null, name = 'radio', className = [], id }) => {
  return (
    <div className={` d-flex align-item-center atom-radio ${className || ''}`}>
      <input
        id={id}
        name={name}
        type="radio"
        className="atom-radio__input"
        onChange={() => onChange({ id })}
      />
      <label className="atom-radio__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

AtomRadio.propTypes = {
  label: PropTypes.string,
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default AtomRadio;
