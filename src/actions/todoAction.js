import { types } from '../types'

export const AddTodo = (todo) => {
	return {
		type: types.addTodo,
		payload: todo,
	}
}

export const DeleteTodo = (id) => {
	return {
		type: types.deleteTodo,
		payload: id,
	}
}

export const EditTodo = (newTodo) => {
	return {
		type: types.editTodo,
		payload: newTodo,
	}
}
