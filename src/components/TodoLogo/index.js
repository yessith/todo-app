import { useGetTodo } from '../../hooks/useGetTodo'
import light from '../../assets/icon-sun.svg'
import dark from '../../assets/icon-moon.svg'
import './logoStyles.css'

export function TodoLogo() {
	const { theme, getTheme } = useGetTodo()

	return (
		<div className='TodoLogo'>
			<h1>Todo</h1>
			<button onClick={getTheme}>
				<img src={theme ? light : dark} alt='Light sun and dark moon' />
			</button>
		</div>
	)
}
