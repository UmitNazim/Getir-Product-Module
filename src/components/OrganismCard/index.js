import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const OrganismCard = ({
  title,
  children,
  flat = false,
  hover = false,
  color = 'white',
  shadow = false,
  noPadding = false,
  ...props
}) => {
  let options = classNames({
    'organism-card': true,
    [`bg-${color}`]: true,
    'organism-card--shadow': shadow,
    'organism-card--hover': hover,
    'rounded-0': flat,
    'p-0': noPadding,
  });

  let { t } = useTranslation();

  return (
    <div {...props}>
      {title && <h5 className="organism-card__title">{t(title)}</h5>}
      <div className={options}>{children}</div>
    </div>
  );
};

OrganismCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  shadow: PropTypes.bool,
  flat: PropTypes.bool,
  noPadding: PropTypes.bool,
  hover: PropTypes.bool,
  children: PropTypes.any,
};

export default OrganismCard;
