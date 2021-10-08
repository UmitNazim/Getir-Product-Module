import PropTypes from 'prop-types';
import { OrganismCard } from 'components';
import { useTranslation } from 'react-i18next';

const AtomNoDataCard = ({
  color = 'lavender-pinocchio',
  description = 'error.notFound',
  children,
}) => {
  const { t } = useTranslation();
  return (
    <OrganismCard color={color}>
      {description && (
        <div className="text-rangoon text-center font-weight-600 font-size-14">
          {t(description)}
        </div>
      )}
      {children}
    </OrganismCard>
  );
};

AtomNoDataCard.propTypes = {
  color: PropTypes.string,
  description: PropTypes.string,
};

export default AtomNoDataCard;
