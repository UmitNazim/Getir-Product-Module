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
        {...props}
        type="text"
        value={inputValue}
        onChange={onInputChange}
        className="molecule-input"
      />
    </div>
  );
};

MoleculeSearchInput.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email']),
};

export default MoleculeSearchInput;
