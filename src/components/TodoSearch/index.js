import './SearchStyles.css'

export function TodoSearch({ queryRef, onGetQuery }) {
	return (
		<form className='TodoForm'>
			<input
				onChange={onGetQuery}
				className='TodoSearch'
				type='text'
				name='search'
				placeholder='Search todo...'
				ref={queryRef}
			/>
		</form>
	)
}
