import TagsContent from './TagsContent';
import BrandsContent from './BrandsContent';
import SortingContent from './SortingContent';
import ProductListContent from './ProductListContent';

const Products = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-3">
        <SortingContent></SortingContent>
        <BrandsContent></BrandsContent>
        <TagsContent></TagsContent>
      </div>
      <div className="col-sm-12 col-md-6">
        <ProductListContent></ProductListContent>
      </div>
    </div>
  );
};

export default Products;
