import Product from './Product';
import Catalog from './Catalog';
import { Route } from 'react-router-dom';

export default [...Product, ...Catalog].map(({ path, component, key }) => (
  <Route exact path={path} component={component} key={key} />
));
