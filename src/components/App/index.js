import { Provider } from 'react-redux'
import store from '../../store'
import { TodoHeader } from '../TodoHeader'
import { TodoLogo } from '../TodoLogo'
import { TodoSearch } from '../TodoSearch'
import { TodoMain } from '../TodoMain'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'
import { CreateTodoBtn } from '../CreateTodoBtn'

import './AppStyles.css'
import { useGetTodo } from '../../hooks/useGetTodo'
import { TodoControl } from '../TodoControl'
import { TodoList } from '../TodoList'

export function App() {
	const {
		query,
		editTodo,
		queryRef,
		openModal,
		totalTodo,
		filterTodo,
		totalCompledTodo,
		setIsEdit,
		setEditTodo,
		setOpenModal,
		setFilterTodo,
		deleteAllTodos,
		getQuery,
		completeTodo,
		filterCompledTodo,
		filterActiveTodo,
		setInitialTodo,
		filterAllTodo,
		isEdit,
	} = useGetTodo()
	return (
		<main className='TodoLayout'>
			<Provider store={store}>
				<TodoHeader>
					<TodoLogo />
					<TodoSearch queryRef={queryRef} onGetQuery={getQuery} />
				</TodoHeader>

				<TodoMain>
					<TodoControl
						totalTodo={totalTodo}
						competed={totalCompledTodo}
						deleteAllTodos={deleteAllTodos}
						filterCompledTodo={filterCompledTodo}
						filterActiveTodo={filterActiveTodo}
						filterAllTodo={filterAllTodo}
					/>
					<TodoList
						query={query}
						filterTodo={filterTodo}
						setFilterTodo={setFilterTodo}
						onCompletedTodo={completeTodo}
						setOpenModal={setOpenModal}
						setIsEdit={setIsEdit}
						setEditTodo={setEditTodo}
						setInitialTodo={setInitialTodo}
					/>
				</TodoMain>

				{!!openModal && (
					<Modal>
						<TodoForm
							setOpenModal={setOpenModal}
							setIsEdit={setIsEdit}
							editTodo={editTodo}
							isEdit={isEdit}
							setEditTodo={setEditTodo}
						/>
					</Modal>
				)}

				<CreateTodoBtn setOpenModal={setOpenModal} />
			</Provider>
		</main>
	)
}
