import { useRef, useState } from 'react'
import { changeTheme } from '../utils/changeTheme'

export function useGetTodo() {
	const [filterTodo, setFilterTodo] = useState([])
	const [initialTodo, setInitialTodo] = useState([])
	const [todoValue, setTodoValue] = useState('')
	const [editTodo, setEditTodo] = useState({ text: '' })
	const [isEdit, setIsEdit] = useState(false)
	const [openModal, setOpenModal] = useState(false)
	const [theme, setTheme] = useState(true)
	const [query, setQuery] = useState('')
	const queryRef = useRef('')

	const totalTodo = filterTodo.length
	const totalCompledTodo = filterTodo.filter(({ completed }) => completed).length

	// Filtro de todo's completados
	const filterCompledTodo = () => {
		const totalCompleted = initialTodo.filter(({ completed }) => completed) || initialTodo
		setFilterTodo(totalCompleted)
	}

	// Filtro de todo's activas
	const filterActiveTodo = () => {
		const totalActiveTodo = initialTodo.filter(({ completed }) => !completed)
		setFilterTodo(totalActiveTodo)
	}

	// Mostrar todos los tod's
	const filterAllTodo = () => {
		setFilterTodo(initialTodo)
	}

	//  get value input modal
	const getTodoValue = (event) => {
		setTodoValue(event.target.value)
	}

	// get value input search
	const getQuery = () => {
		const { current } = queryRef
		setQuery(current.value)
	}

	// Completed todo
	const completeTodo = (id) => {
		const todoIndex = filterTodo.findIndex((todo) => todo.id === id)
		const newTodos = [...filterTodo]
		newTodos[todoIndex].completed = true
		setFilterTodo(newTodos)
	}

	// Delete all todo
	const deleteAllTodos = () => {
		const newTodo = [...filterTodo]
		const todo = newTodo.filter((todo) => !todo.completed)
		setFilterTodo(todo)
	}

	// change theme
	const getTheme = () => {
		const isTheme = !theme
		const currentTheme = isTheme ? 'theme-1' : 'theme-2'
		changeTheme(currentTheme)
		setTheme(!theme)
	}

	const toggleModalActive = () => {
		setOpenModal(!openModal)
	}

	return {
		totalTodo,
		totalCompledTodo,
		filterTodo,
		todoValue,
		openModal,
		query,
		queryRef,
		isEdit,
		editTodo,
		theme,
		setIsEdit,
		setFilterTodo,
		setTodoValue,
		getTodoValue,
		getQuery,
		setOpenModal,
		toggleModalActive,
		completeTodo,
		deleteAllTodos,
		setEditTodo,
		filterCompledTodo,
		filterActiveTodo,
		setInitialTodo,
		filterAllTodo,
		getTheme,
	}
}
