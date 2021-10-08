import { AtomImage, AtomButton } from 'components';
import BasketContent from './BasketContent';
import { useState } from 'react';
import { connect } from 'react-redux';

const AppHeader = ({ basketTotalPrice }) => {
  const [basketNeedsOpen, setBasketNeedsOpen] = useState(false);

  return (
    <header className="app-header d-flex align-items-center ">
      <div className="app-header__content container d-flex justify-content-between align-items-center position-relative">
        <div></div>
        <AtomImage src={require('assets/icons/module-logo.svg').default} alt="module-logo" />
        <AtomButton
          onClick={() => setBasketNeedsOpen(!basketNeedsOpen)}
          bgColor="ocean"
          className={['basket-content']}
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
