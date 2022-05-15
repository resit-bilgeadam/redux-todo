import { createStore } from "redux";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./types";

const INITIAL_STATE = {
    todos: [
        {id: Math.random(), title: 'Todo 1', text: 'Todo 1 description...', isCompleted: false},
        {id: Math.random(), title: 'Todo 2', text: 'Todo 2 description...', isCompleted: true},
        {id: Math.random(), title: 'Todo 3', text: 'Todo 3 description...', isCompleted: false},
    ]
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            };

        case DELETE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        case EDIT_TODO:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return action.payload;
                    }

                    return todo;
                })
            }
    
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;