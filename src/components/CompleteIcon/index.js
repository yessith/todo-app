import { TodoIcon } from '../TodoIcon'

export function CompleteIcon({ isCompleted, onCompleted }) {
	return <TodoIcon type='check' color={isCompleted ? '#4caf50' : 'gray'} onClick={onCompleted} />
}
