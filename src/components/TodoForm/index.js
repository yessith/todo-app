import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { AddTodo, EditTodo } from '../../actions/todoAction'
import { useGetTodo } from '../../hooks/useGetTodo'
import './TodoForm.css'

export function TodoForm({ setOpenModal, setIsEdit, isEdit, setEditTodo, editTodo }) {
	const { todoValue, getTodoValue, setTodoValue } = useGetTodo()

	const dispatch = useDispatch()

	useEffect(() => {
		setTodoValue(editTodo.text)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editTodo])

	const closeModal = () => {
		setOpenModal(false)
	}

	const addTodo = (event) => {
		event.preventDefault()

		if (isEdit) {
			dispatch(
				EditTodo({
					id: editTodo.id,
					text: todoValue,
				})
			)
		} else {
			dispatch(AddTodo({ id: uuidv4(), text: todoValue, completed: false }))
		}

		setEditTodo({ text: '' })
		setIsEdit(false)
		setOpenModal(false)
	}

	return (
		<form onSubmit={addTodo} className='Todoform'>
			<label>Agrega tu nuevo TODO</label>
			<textarea
				value={todoValue}
				onChange={getTodoValue}
				placeholder='Agrega una nueva tarea'
				required
			/>
			<div className='TodoForm-buttonContainer'>
				<button
					type='button'
					className='TodoForm-button TodoForm-button--cancel'
					onClick={closeModal}
				>
					Cancelar
				</button>
				<button type='submit' className='TodoForm-button TodoForm-button--add'>
					Añadir
				</button>
			</div>
		</form>
	)
}
