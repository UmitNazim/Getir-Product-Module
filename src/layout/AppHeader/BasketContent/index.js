import { connect } from 'react-redux';
import { addBasket } from 'store/Basket/actions';
import { OrganismCard, AtomDivider, AtomButton, AtomImage, AtomNoDataCard } from 'components';

const BasketContent = ({ basket, basketTotalPrice, addBasket }) => {
  const onIncrement = (key) => {
    let temp = { ...basket };
    temp[key].count += 1;
    addBasket(temp);
  };
  const onDecrement = (key) => {
    let temp = { ...basket };
    if (temp[key].count == 1) delete temp[key];
    else temp[key].count -= 1;
    addBasket(temp);
  };

  return (
    <div className="basket-content__wrapper bg-ball-blue">
      <OrganismCard shadow hover>
        {Object.keys(basket).length ? (
          <>
            {Object.keys(basket).map((key) => (
              <div key={`basket-item-${key}`}>
                <div
                  className="d-flex justify-content-between align-items-center"
                  key={basket[key].name}
                >
                  <div>
                    <div className="text-rangoon font-size-14 mb-1">{basket[key].name}</div>
                    <div className="text-ball-blue font-size-14 font-weight-600">
                      &#8378;{(basket[key].price * basket[key].count).toFixed(2)}
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-center align-items-center">
                      <AtomButton
                        onClick={() => onDecrement(key)}
                        className={['p-0']}
                        bgColor="transparent"
                      >
                        <AtomImage src={require('assets/icons/minus-sign.svg').default} />
                      </AtomButton>
                      <div className="basket-content__count  text-center d-inline">
                        <span className="basket-content__count--content">{basket[key].count}</span>
                      </div>
                      <AtomButton
                        className={['p-0']}
                        bgColor="transparent"
                        onClick={() => onIncrement(key)}
                      >
                        <AtomImage src={require('assets/icons/plus-sign.svg').default} />
                      </AtomButton>
                    </div>
                  </div>
                </div>
                <AtomDivider color="primary" className={['my-3']} />
              </div>
            ))}
            <footer className="d-flex align-items-center justify-content-end">
              <button className="basket-content__sum text-ball-blue bg-transparent font-size-14 font-weight-600">
                &#8378;{basketTotalPrice.toFixed(2)}
              </button>
            </footer>
          </>
        ) : (
          <AtomNoDataCard description="error.noProduct" />
        )}
      </OrganismCard>
    </div>
  );
};

const mapStateToProps = ({ basket: { basket, basketTotalPrice } }) => ({
  basket,
  basketTotalPrice,
});
export default connect(mapStateToProps, { addBasket })(BasketContent);
