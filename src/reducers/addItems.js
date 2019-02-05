const foodIngredientsReducerDefaultState = []
export default (state=foodIngredientsReducerDefaultState, action)=>{
  switch (action.type){
    case 'ADD_Items':
      return[
        ...state,
        action.items
      ];
    default: 
      return state;
    }
  }