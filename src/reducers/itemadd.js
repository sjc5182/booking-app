
const addItemReducerDefaultState = [];

export default (state=addItemReducerDefaultState, action)=>{
  switch (action.type){
    case 'INCREMENT':
      return{
        count: state.count+1
      };
    default: 
      return state;
  }
};