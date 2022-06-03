import { TodoIcon } from '../TodoIcon'

export function EditIcon({ onEditTodo }) {
	return <TodoIcon type='edit' onClick={onEditTodo} />
}
