import { AtomRadio, OrganismCard } from 'components';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { getProducts } from 'store/Products/actions';

const SortingContent = ({ getProducts }) => {
  const { t } = useTranslation();

  const sortingItems = [
    { label: 'highPriceToLow', sort: 'price', order: 'desc' },
    { label: 'lowPriceToHigh', sort: 'price', order: 'asc' },
    { label: 'newToOld', sort: 'added', order: 'asc' },
    { label: 'oldToNew', sort: 'added', order: 'desc' },
  ];

  return (
    <OrganismCard shadow title="sorting.name" className="mb-4">
      {sortingItems.map((item, index) => (
        <AtomRadio
          label={t(`sorting.type.${item.label}`)}
          key={`sorting-item-${index}`}
          id={item.label}
          name="sorting-types"
          className={[1, 2].includes(index) ? 'my-3' : ''}
          onChange={() => getProducts(item)}
        />
      ))}
    </OrganismCard>
  );
};

export default connect(null, { getProducts })(SortingContent);
