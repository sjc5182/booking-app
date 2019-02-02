import uuid from 'uuid';
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