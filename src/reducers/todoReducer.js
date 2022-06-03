import { types } from '../types'

const initialState = {
	todoList: [],
}

export const todoReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case types.addTodo:
			return {
				todoList: [payload, ...state.todoList],
			}

		case types.deleteTodo:
			return {
				todoList: state.todoList.filter(({ id }) => id !== payload),
			}

		case types.editTodo:
			return {
				todoList: state.todoList.map((todo) =>
					todo.id === payload.id ? { ...todo, text: payload.text } : todo
				),
			}

		default:
			return state
	}
}
