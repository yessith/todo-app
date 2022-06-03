export const obtenerLocalStorage = () => {
	const citasStorage = localStorage.getItem('TodoKey')

	if (!citasStorage) return undefined

	return JSON.parse(citasStorage)
}

export const guardarLocalStorage = (state) => localStorage.setItem('TodoKey', JSON.stringify(state))
