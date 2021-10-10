import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addBasket } from 'store/Basket/actions';
import { getProducts } from 'store/Products/actions';
import { OrganismCard, MoleculeProduct, AtomNoDataCard, OrganismPagination } from 'components';

const ProductListContent = ({ basket, products, addBasket, getProducts, totalProductCount }) => {
  useEffect(async () => {
    await getProducts();
  }, []);

  const onProductAddBasket = ({ name, price, slug }) => {
    let temp = { ...basket };
    if (temp[slug]) temp[slug].count += 1;
    else temp[slug] = { name, price, count: 1 };
    addBasket(temp);
  };

  return (
    <>
      <OrganismCard shadow title="product.list">
        <div className="row gy-4">
          {products.length ? (
            products.map((item, index) => (
              <div className="col-md-3 col-sm-12" key={`product-${index}`}>
                <MoleculeProduct
                  name={item.name}
                  price={item.price}
                  onProductAdd={() => onProductAddBasket(item)}
                ></MoleculeProduct>
              </div>
            ))
          ) : (
            <AtomNoDataCard></AtomNoDataCard>
          )}
        </div>
      </OrganismCard>
      {
        <div style={{ marginTop: '32px' }}>
          <OrganismPagination
            shadow
            size="md"
            perPage={16}
            activeColor="stormy-grey"
            passiveColor="transparent"
            totalCount={totalProductCount}
            onPaginate={(filter) => getProducts(filter)}
          />
        </div>
      }
    </>
  );
};

const mapStateToProps = ({ basket: { basket }, products: { products, totalProductCount } }) => ({
  basket,
  products,
  totalProductCount,
});

export default connect(mapStateToProps, { getProducts, addBasket })(ProductListContent);
