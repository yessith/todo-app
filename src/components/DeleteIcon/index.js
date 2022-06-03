import { useDispatch } from 'react-redux'
import { DeleteTodo } from '../../actions/todoAction'
import { TodoIcon } from '../TodoIcon'

export function DeleteIcon({ id }) {
	const dispatch = useDispatch()

	const handleDeleteTodo = () => {
		dispatch(DeleteTodo(id))
	}

	return <TodoIcon type='delete' onClick={handleDeleteTodo} />
}
