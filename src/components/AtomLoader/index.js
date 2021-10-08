import PropTypes from 'prop-types';

const AtomLoader = ({ color = 'ball-blue', size = 'sm' }) => {
  return (
    <div className="atom-loader">
      {[1, 2, 3].map((item) => (
        <div
          key={`loader-bounce-item-${item}`}
          className={`atom-loader__bounce atom-loader__bounce-${item} bg-${color}  atom-loader__${size}`}
        ></div>
      ))}
    </div>
  );
};

AtomLoader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};

export default AtomLoader;
