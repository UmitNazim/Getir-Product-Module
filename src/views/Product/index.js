import BrandsContent from './BrandsContent';
import ProductList from './ProductList';
import SortingContent from './SortingContent';
import TagsContent from './TagsContent';

const Products = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-3">
        <SortingContent />
        <BrandsContent />
        <TagsContent />
      </div>
      <div className="col-sm-12 col-md-6">
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
