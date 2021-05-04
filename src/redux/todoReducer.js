setData();

const initialState = {
    todos: []        
}

function setData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=> response.json())
        .then(response => {
            initialState.todos = response.slice(0, 10);
            // console.log(response);
            // console.log(initialState);
        })
        .catch(err => console.log(err))
}

// console.log(initialState)

const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO': 
            // console.log(action.payload);
            return {todos: [{title: action.payload, id: Math.random(), userId:1, completed: false}, ...state.todos]};
        case 'DEL_TODO': return {todos: state.todos.filter(s => s.id != action.payload)};
        default: return state;
    }
}


export default todoReducer;