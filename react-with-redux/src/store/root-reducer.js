import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user';
import items from './items';
import price from './price';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user,
    items,
    price,
  });

export default createRootReducer;
