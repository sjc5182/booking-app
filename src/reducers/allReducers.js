import { combineReducers } from 'redux';
import fetchItems from './fetchItems';
import addItems from './addItems';

export default combineReducers({
  fetchItems,
  addItems
});