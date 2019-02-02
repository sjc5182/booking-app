import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(incrementCount());
//store.dispatch(decrementCount());
//  store.dispatch(addItem(
//   {
//     count: 2,
//     food: "Pork"
//   }
// ));
// store.dispatch(addItem(
//   {
//     count: 3,
//     food: "Chicken"
//   }
// ));


const jsx = (
  <Provider store = {store}>
    <App />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
