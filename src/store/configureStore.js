import { createStore, combineReducers } from 'redux';
import itemAdd from '../reducers/itemadd';

export default () => {
  const store = createStore(
    combineReducers({
      itemAdd
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
  
};

