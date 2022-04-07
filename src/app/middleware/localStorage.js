export const setToLocalStorage = store => next => action => {
	// console.log('dispatching', action)
	let result = next(action)
	let state = store.getState();
	switch (action.type) {
		case 'card/addToCard':
		case 'card/dropProductFromCard':
			localStorage.setItem('card', JSON.stringify(state.card))
			break;
		case 'card/clear':
			localStorage.removeItem('card')
			break;
		default:
	}
	return result
}
