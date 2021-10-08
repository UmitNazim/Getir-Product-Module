import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { useState, useCallback } from 'react';

const MoleculeSearchInput = ({ onChange, className, ...props }) => {
  const [inputValue, setInputValue] = useState('');

  const debouncedSave = useCallback(
    debounce((newValue) => onChange(newValue), 500),
    [],
  );

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value);
    debouncedSave(value);
  };

  return (
    <div className={className}>
      <input
        value={inputValue}
        onChange={onInputChange}
        className="molecule-input"
        type="text"
        {...props}
      />
    </div>
  );
};

MoleculeSearchInput.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  onChange: PropTypes.func,
};

export default MoleculeSearchInput;
