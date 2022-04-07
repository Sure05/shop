export const getPhones = (data, search) => {
	let phones = [];
	data.map((el) => {
		if (search !== '') {
			if (el.name.toLowerCase().indexOf(search.toLowerCase()) > 0)  phones.push(el)
		} else phones.push(el)
	})
	return phones
}
