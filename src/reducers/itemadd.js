const foodIngredientsReducerDefaultState = []

export default (state=foodIngredientsReducerDefaultState, action)=>{
  switch (action.type){
    // case 'INCREMENT':
    //   return{
    //     count: state.count+action.incrementBy
    //   };
    // case 'DECREMENT':
    //   return{
    //     count: state.count-action.decrementBy
    //   };
    case 'ADD_Item':
      return[
        ...state,
        action.item
      ];
    default: 
      return state;
  }
};