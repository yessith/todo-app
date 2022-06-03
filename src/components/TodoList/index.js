import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { TodoItem } from '../TodoItem'
import './TodoList.css'

export function TodoList({
	filterTodo,
	query,
	setFilterTodo,
	onCompletedTodo,
	setOpenModal,
	setIsEdit,
	setEditTodo,
	setInitialTodo,
}) {
	const { todoList } = useSelector((store) => store.todo)

	useEffect(() => {
		setInitialTodo(todoList)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [todoList])

	useEffect(() => {
		const filterTodos = todoList.filter(({ text }) =>
			text.toLowerCase().includes(query.toLowerCase())
		)

		setFilterTodo(filterTodos)
	}, [setFilterTodo, query, todoList])

	return (
		<ul className='TodoList'>
			{filterTodo.map((todo) => (
				<li className='TodoItem' key={todo.id}>
					<TodoItem
						todo={todo}
						onCompletedTodo={onCompletedTodo}
						setOpenModal={setOpenModal}
						setIsEdit={setIsEdit}
						setEditTodo={setEditTodo}
					/>
				</li>
			))}
		</ul>
	)
}
