import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { basket } from './Basket/reducer';
import { brands } from './Brands/reducer';
import { products } from './Products/reducer';
import { tags } from './Tags/reducer';

export default createStore(
  combineReducers({
    basket,
    brands,
    products,
    tags,
  }),
  applyMiddleware(thunk),
);
