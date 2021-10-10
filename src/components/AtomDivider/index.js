import PropTypes from 'prop-types';
import classNames from 'classnames';

const AtomDivider = ({ color = 'white-smoke', size = 'sm', className = [] }) => {
  let options = classNames({
    'atom-divider': true,
    [`bg-${color}`]: true,
    [`atom-divider__${size}`]: true,
    ...className.reduce((acc, curr) => ((acc[curr] = true), acc), {}),
  });
  return <hr className={options}></hr>;
};

AtomDivider.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default AtomDivider;
