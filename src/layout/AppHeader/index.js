import { useState } from 'react';
import { connect } from 'react-redux';
import BasketContent from './BasketContent';
import { AtomImage, AtomButton } from 'components';

const AppHeader = ({ basketTotalPrice }) => {
  const [basketNeedsOpen, setBasketNeedsOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="app-header__content d-flex justify-content-between align-items-center position-relative">
        <AtomImage src={require('assets/icons/module-logo.svg').default} alt="module-logo" />
        <AtomButton
          bgColor="ocean"
          className={['basket-content']}
          onClick={() => setBasketNeedsOpen(!basketNeedsOpen)}
        >
          <AtomImage src={require('assets/icons/basket.svg').default} alt="basket-logo" />
          <span className="ms-2"> &#8378;{basketTotalPrice.toFixed(2)}</span>
        </AtomButton>
      </div>
      {basketNeedsOpen && <BasketContent />}
    </header>
  );
};

const mapStateToProps = ({ basket: { basketTotalPrice } }) => ({ basketTotalPrice });
export default connect(mapStateToProps, null)(AppHeader);
