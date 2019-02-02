import { combineReducers } from 'redux';
import items from './itemadd';
import addItem from './addItem';

export default combineReducers({
  items,
  addItem
});