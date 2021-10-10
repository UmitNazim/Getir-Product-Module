import thunk from 'redux-thunk';
import { tags } from './Tags/reducer';
import { basket } from './Basket/reducer';
import { brands } from './Brands/reducer';
import { products } from './Products/reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';

export default createStore(
  combineReducers({
    tags,
    basket,
    brands,
    products,
  }),
  applyMiddleware(thunk),
);
