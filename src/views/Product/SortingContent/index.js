import { AtomRadio, OrganismCard } from 'components';
import { useTranslation } from 'react-i18next';

const SortingContent = () => {
  const { t } = useTranslation();
  const sortingItems = [
    { label: 'highPriceToLow' },
    { label: 'lowPriceToHigh' },
    { label: 'newToOld' },
    { label: 'oldToNew' },
  ];
  const onChange = (e) => {
    console.log({ e });
  };

  return (
    <OrganismCard shadow title="sorting.name" className="mb-4">
      {sortingItems.map(({ label }, index) => (
        <AtomRadio
          label={t(`sorting.type.${label}`)}
          key={`sorting-item-${index}`}
          id={label}
          name="sorting-types"
          className={[1, 2].includes(index) ? 'my-3' : ''}
          onChange={onChange}
        />
      ))}
    </OrganismCard>
  );
};

export default SortingContent;
