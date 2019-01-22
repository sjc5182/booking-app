import { createStore, combineReducers } from 'redux';
import itemAdd from '../reducers/itemadd';

export default () => {
  const store = createStore(itemAdd);
  return store;
};
