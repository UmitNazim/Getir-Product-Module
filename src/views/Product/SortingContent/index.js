import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getProducts } from 'store/Products/actions';
import { AtomRadio, OrganismCard } from 'components';

const SortingContent = ({ getProducts }) => {
  const { t } = useTranslation();

  const sortingParameters = [
    { label: 'highPriceToLow', _sort: 'price', _order: 'desc' },
    { label: 'lowPriceToHigh', _sort: 'price', _order: 'asc' },
    { label: 'newToOld', _sort: 'added', _order: 'asc' },
    { label: 'oldToNew', _sort: 'added', _order: 'desc' },
  ];

  return (
    <OrganismCard shadow title="sorting.name" className="mb-4">
      {sortingParameters.map(({ label, ...rest }, index) => (
        <AtomRadio
          id={label}
          name="sorting-types"
          key={`sorting-item-${index}`}
          label={t(`sorting.type.${label}`)}
          onChange={() => getProducts(rest)}
          className={[1, 2].includes(index) ? 'my-3' : ''}
        />
      ))}
    </OrganismCard>
  );
};

export default connect(null, { getProducts })(SortingContent);
