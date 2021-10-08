import classNames from 'classnames';
import PropTypes from 'prop-types';

const AtomButton = ({
  onClick,
  color = 'white',
  bgColor = 'ball-blue',
  size = 'sm',
  block = false,
  disabled = false,
  flat = false,
  type = 'button',
  children = null,
  className = [],
}) => {
  let options = classNames({
    'atom-button': true,
    [`text-${color}`]: true,
    [`bg-${bgColor}`]: true,
    [`atom-button__${size}`]: true,
    'w-100': block,
    'atom-button__disabled': disabled,
    'rounded-0': flat,
    ...className.reduce((acc, curr) => ((acc[curr] = true), acc), {}),
  });
  return (
    <button onClick={onClick} className={options} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

AtomButton.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export default AtomButton;
