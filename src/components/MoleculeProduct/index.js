import { AtomButton, AtomImage } from 'components';

const MoleculeProduct = ({ name = null, price = 0, onProductAdd }) => {
  return (
    <div className="molecule-product">
      <div className="molecule-product__image">
        <AtomImage src={require('assets/images/general/ice-cream.jpg').default} />
      </div>
      <div className="molecule-product__price">&#8378;{price}</div>
      <div className="molecule-product__description">{name}</div>

      <AtomButton onClick={onProductAdd} block>
        Add
      </AtomButton>
    </div>
  );
};

export default MoleculeProduct;
