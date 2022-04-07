export const setToLocalStorage = store => next => action => {
	// console.log('dispatching', action)
	let result = next(action)
	if(action.type === 'card/addToCard'){
		let state = store.getState();
		localStorage.setItem('card', JSON.stringify(state.card))
	}
	return result
}
