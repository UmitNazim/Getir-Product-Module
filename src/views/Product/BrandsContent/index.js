import { OrganismCard, MoleculeSearchInput, AtomCheckBox, AtomNoDataCard } from 'components';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getBrands, getBrandsBySearch, groupBrands } from 'store/Brands/actions';

const BrandsContent = ({ brands, getBrandsBySearch, getBrands, groupBrands }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isBrandsActionDone, setIsBrandsActionDone] = useState(false);

  useEffect(async () => {
    await groupBrands();
    getBrands();
    setIsBrandsActionDone(true);
  }, []);

  const onCheckboxChanged = (item) => {
    setSelectedBrands(
      item.value
        ? [...selectedBrands, item]
        : [...selectedBrands.filter(({ id }) => id !== item.id)],
    );
  };

  const onBrandSearch = (searchKey) => {
    getBrandsBySearch(searchKey.toLowerCase());
  };

  return (
    <OrganismCard shadow title="brand.list" className="mb-4">
      <MoleculeSearchInput placeholder="Search Brand" className="mb-3" onChange={onBrandSearch} />
      <div className="overflow-auto py-2" style={{ maxHeight: '166px', paddingLeft: '2px' }}>
        {isBrandsActionDone && brands.length ? (
          brands.map(({ manufacturer, totalCount, value = false }) => (
            <AtomCheckBox
              onChange={(checked) =>
                onCheckboxChanged({ totalCount, manufacturer, value: checked })
              }
              value={value}
              label={manufacturer}
              labelSuffix={totalCount}
              key={manufacturer}
            />
          ))
        ) : (
          <AtomNoDataCard />
        )}
      </div>
    </OrganismCard>
  );
};
const mapStateToProps = ({ brands: { brands } }) => ({ brands });
export default connect(mapStateToProps, { groupBrands, getBrandsBySearch, getBrands })(
  BrandsContent,
);
