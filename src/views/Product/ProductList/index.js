import { OrganismCard, MoleculeProduct, AtomNoDataCard } from 'components';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from 'store/Products/actions';
import { addBasket } from 'store/Basket/actions';

const ProductList = ({ getProducts, addBasket, products, basket }) => {
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
    <OrganismCard shadow title="product.list">
      <div className="row gy-4">
        {products.length ? (
          products.map((item, index) => (
            <div className="col-md-3 col-sm-12" key={`product-${index}`}>
              <MoleculeProduct
                onProductAdd={() => onProductAddBasket(item)}
                name={item.name}
                price={item.price}
                disableOnProductSelect
              ></MoleculeProduct>
            </div>
          ))
        ) : (
          <AtomNoDataCard />
        )}
      </div>
    </OrganismCard>
  );
};

const mapStateToProps = ({ products: { products }, basket: { basket } }) => ({ products, basket });
export default connect(mapStateToProps, { getProducts, addBasket })(ProductList);
