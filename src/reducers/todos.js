const initialState = {
    data : [],
};

const todos = (state = initialState, action) => {
   switch(action.type) {
       case "ADD_TODO" : 
          return {
             ...state,
             data : [
                ...state.data,
                {
                   message : action.message,
                   id : action.id,
                },
             ],
          };
       case "ADD_TODO" : 
          return {};
       default: 
          return state;
   }
};

export default todos;