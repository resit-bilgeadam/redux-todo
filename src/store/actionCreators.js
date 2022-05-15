import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./types";

export const createAction = (todo) => ({type: ADD_TODO, payload: todo});
export const deleteAction = (todoId) => ({type: DELETE_TODO, payload: todoId})
export const editAction = (updatedTodo) => ({type: EDIT_TODO, payload: updatedTodo});