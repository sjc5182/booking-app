const foodIngredientsReducerDefaultState = {
  count: 0,
  items: []
}

export default (state=foodIngredientsReducerDefaultState, action)=>{
  switch (action.type){
    case 'INCREMENT':
      return{
        count: state.count+action.incrementBy
      };
    case 'DECREMENT':
      return{
        count: state.count-action.decrementBy
      };
    case 'AddItem':
      return{

      };
    default: 
      return state;
  }
};