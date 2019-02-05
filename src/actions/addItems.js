import axios from 'axios';

export const itemsPostDataSuccess = (data) => ({
  type: 'ADD_Items',
  items: {
    countValue: data.countValue,
    targetList: data.targetList
  }
});

export const itemsPostData = (url,{countValue, targetList}) => {
  return (dispatch) => {
    return axios.post(url, {countValue, targetList}).then(response => 
      dispatch(itemsPostDataSuccess(response.data))
    )
    .catch(error => {
      throw(error);
    })
  }
}