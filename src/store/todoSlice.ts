import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: string
    title: string
}

const initialState = {
    todos: [] as Todo[]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        getTodos: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload
        },
        addTodo: (state, action:PayloadAction<string>) => {
            const todo = {
                id: nanoid(),
                title: action.payload
            }
            state.todos.unshift(todo)
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((property: Todo) => property.id !== action.payload)
        }

    }
})

export const { getTodos, addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer