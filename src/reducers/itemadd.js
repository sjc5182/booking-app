
export default (state={count: 0}, action)=>{
  switch (action.type){
    case 'INCREMENT':
      return{
        count: state.count+action.incrementBy
      };
    default: 
      return state;
  }
};