const foodIngredientsReducerDefaultState = []
export default (state=foodIngredientsReducerDefaultState, action)=>{
  switch (action.type){
    case 'ADD_Item':
      return[
        ...state,
        action.item
      ];
    default: 
      return state;
    }
  }