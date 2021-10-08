import PropTypes from 'prop-types';

const AtomCheckBox = ({ label = null, value = false, onChange, labelSuffix = null }) => {
  return (
    <div className="d-flex align-item-center mb-2">
      <input
        className="atom-checkbox__input"
        type="checkbox"
        value={value}
        onChange={({ target: { checked } }) => onChange(checked)}
        id={label}
      />
      <label className="atom-checkbox__label" htmlFor={label}>
        {label}
        {labelSuffix && (
          <span className="ms-1 font-size-14 text-silver-chalice">({labelSuffix})</span>
        )}
      </label>
    </div>
  );
};

AtomCheckBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
};

export default AtomCheckBox;
