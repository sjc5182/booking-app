import uuid from 'uuid';

// export const incrementCount = ({incrementBy = 1} = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: incrementBy
// })

// export const decrementCount = ({decrementBy = 1} = {}) =>({
//   type: 'DECREMENT',
//   decrementBy: decrementBy
// })


export const addItem = (
  { 
    count = 0,
    food = ''
  } = {}
) => ({
  type: 'ADD_Item',
  item: {
    id: uuid(),
    count,
    food
  }
});