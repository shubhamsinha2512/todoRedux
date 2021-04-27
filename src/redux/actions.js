export const addTodo = (todoText)=>{
    return {
        type: 'ADD_TODO',
        payload: todoText
    }
}

export const delTodo = (key)=>{
    return {
        type: 'DEL_TODO',
        payload: key
    }
}