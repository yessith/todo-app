import './CreateTodoButton.css'

export function CreateTodoBtn({ setOpenModal }) {
	const onClickButton = () => {
		setOpenModal((prevState) => !prevState)
	}

	return (
		<button className='CreateTodoButton' onClick={onClickButton}>
			+
		</button>
	)
}
