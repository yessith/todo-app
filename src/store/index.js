import { createStore, combineReducers } from 'redux'
import { todoReducer } from '../reducers/todoReducer'
import { guardarLocalStorage, obtenerLocalStorage } from '../utils/localStorage'

const storageState = obtenerLocalStorage()
const reducers = combineReducers({ todo: todoReducer })

const store = createStore(
	reducers,
	storageState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
	guardarLocalStorage({
		todo: store.getState().todo,
	})
})

export default store
