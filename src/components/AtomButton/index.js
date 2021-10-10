import PropTypes from 'prop-types';
import classNames from 'classnames';

const AtomButton = ({
  onClick,
  size = 'sm',
  flat = false,
  block = false,
  shadow = false,
  type = 'button',
  color = 'white',
  className = [],
  children = null,
  disabled = false,
  bgColor = 'ball-blue',
  ...props
}) => {
  let options = classNames({
    'atom-button': true,
    [`text-${color}`]: true,
    [`bg-${bgColor}`]: true,
    [`atom-button__${size}`]: true,
    'w-100': block,
    'atom-button__disabled': disabled,
    'rounded-0': flat,
    'atom-button__shadow': shadow,
    ...className.reduce((acc, curr) => ((acc[curr] = true), acc), {}),
  });

  return (
    <button onClick={onClick} className={options} type={type} disabled={disabled} {...props}>
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
  shadow: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export default AtomButton;
