const initialState = {
    todos: [
        {text : 'Read React Native Doc', key:'1'},
        {text : 'Read Component Api', key:'2'},
        {text : 'Learn about android bridge', key:'3'},
        {text : 'Read about new synchronous feature', key:'4'},
        {text : 'Redux Working', key:'5'},
  ]};

const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO': 
            console.log(action.payload);
            return {todos: [{text: action.payload, key: Math.random()}, ...state.todos]};
        case 'DEL_TODO': return {todos: state.todos.filter(s => s.key != action.payload)};
        default: return state;
    }
}


export default todoReducer;