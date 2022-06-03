import { useCallback } from 'react'
import { CompleteIcon } from '../CompleteIcon'
import { DeleteIcon } from '../DeleteIcon'
import { EditIcon } from '../EditIcon'
import './TodoItem.css'

export function TodoItem({ todo, onCompletedTodo, setOpenModal, setIsEdit, setEditTodo }) {
	const onCompleted = useCallback(() => onCompletedTodo(todo.id), [onCompletedTodo, todo.id])
	const onEditTodo = useCallback(() => {
		setOpenModal(true)
		setIsEdit(true)
		setEditTodo(todo)
	}, [setEditTodo, setIsEdit, setOpenModal, todo])

	return (
		<>
			<CompleteIcon isCompleted={todo.completed} onCompleted={onCompleted} />
			<p className={`TodoItem-p ${todo.completed && 'TodoItem-p--complete'}`}>{todo.text}</p>
			<EditIcon onEditTodo={onEditTodo} />
			<DeleteIcon id={todo.id} />
		</>
	)
}
