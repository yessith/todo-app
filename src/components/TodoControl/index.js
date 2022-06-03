import './TodoControl.css'
export function TodoControl({
	totalTodo,
	competed,
	deleteAllTodos,
	filterCompledTodo,
	filterActiveTodo,
	filterAllTodo,
}) {
	return (
		<div className='TodoControl'>
			<span>
				{competed} Tareas Completadas De {totalTodo}
			</span>
			<div className='TodoControlBox'>
				<button onClick={filterAllTodo} className='TodoBtn'>
					All
				</button>
				<button onClick={filterActiveTodo} className='TodoBtn'>
					Active
				</button>
				<button onClick={filterCompledTodo} className='TodoBtn'>
					Completed
				</button>
				<button onClick={deleteAllTodos} className='TodoBtn'>
					Clear
				</button>
			</div>
		</div>
	)
}
