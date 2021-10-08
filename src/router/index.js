import { Route } from 'react-router-dom';
import Product from './Product';

export default [...Product].map(({ path, component, key }) => (
  <Route exact path={path} component={component} key={key} />
));
