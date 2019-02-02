import axios from 'axios';

// export const incrementCount = ({incrementBy = 1} = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: incrementBy
// })

// export const decrementCount = ({decrementBy = 1} = {}) =>({
//   type: 'DECREMENT',
//   decrementBy: decrementBy
// })


export const itemsFetchDataSuccess = (items) => ({
  // return {
  //   type: 'ITEMS_FETCH_DATA_SUCCESS',
  //   items
  // }
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
})

export const itemsFetchData = (url) => {
  return (dispatch) => {
    axios.get(url).then(response => {
      return response;
    })
    .then((test) => dispatch(itemsFetchDataSuccess(test.data)))
  }
}




