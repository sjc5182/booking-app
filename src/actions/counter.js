import uuid from 'uuid';
import axios from 'axios';

// export const incrementCount = ({incrementBy = 1} = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: incrementBy
// })

// export const decrementCount = ({decrementBy = 1} = {}) =>({
//   type: 'DECREMENT',
//   decrementBy: decrementBy
// })


export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  }
}

export function itemsFetchData(url) {
  return (dispatch) => {
    axios.get(url).then(response => {
      return response;
    })
    .then((test) => dispatch(itemsFetchDataSuccess(test.data)))
  }
}




// export const addItem = (
//   { 
//     count = 0,
//     food = ''
//   } = {}
// ) => ({
//   type: 'ADD_Item',
//   item: {
//     id: uuid(),
//     count,
//     food
//   }
// });