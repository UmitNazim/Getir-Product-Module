import PropTypes from 'prop-types';

const AtomRadio = ({ onChange, label = null, name = 'radio', className = [], id }) => {
  return (
    <div className={` d-flex align-item-center atom-radio ${className || ''}`}>
      <input
        onChange={() => onChange({ id })}
        className="atom-radio__input"
        type="radio"
        name={name}
        id={id}
      />
      <label className="atom-radio__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

AtomRadio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired,
};

export default AtomRadio;
