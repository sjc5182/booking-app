import axios from 'axios';

export const itemsFetchDataSuccess = (items) => ({
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
})

export const itemsFetchData = (url) => {
  return (dispatch) => {
    axios.get(url).then(response => {
      return response;
    })
    .then((item) => 
    dispatch(itemsFetchDataSuccess(item.data)))
  }
}
















// export const incrementCount = ({incrementBy = 1} = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: incrementBy
// })

// export const decrementCount = ({decrementBy = 1} = {}) =>({
//   type: 'DECREMENT',
//   decrementBy: decrementBy
// })



