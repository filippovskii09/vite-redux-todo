import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const initialState = {
	todoList: localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) :[],
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addItem:(state, action) => {
			const newItem = { id: uuid(), title: action.payload.title }
			state.todoList = [...state.todoList, newItem]

			localStorage.setItem('todoList', JSON.stringify([...state.todoList], newItem))
		},
		removeItem: (state, action) => {
			const itemId = action.payload.id
			const filtredTodoList = state.todoList.filter(item => item.id !== itemId)
			
			state.todoList = filtredTodoList;
			
			localStorage.setItem('todoList', JSON.stringify([...state.todoList]))
		}
	}
})

export const { addItem, removeItem } = todoSlice.actions

export default todoSlice.reducer