import phones from './phones'
import categories from "./categories";

export const fetchPhones = async (categoryId) => {
	return new Promise(resolve => {
		if (categoryId) {
			resolve(phones.filter(el => el.categoryId === categoryId))
		} else
			resolve(phones)
	})
}

export const loadMorePhones = async () => {
	return new Promise(resolve => {
		resolve(phones)
	})
}

export const fetchPhoneById = async (id) => {
	return new Promise(resolve => {
		const phone = phones.filter(el => el.id === id)
		console.log(id)
		if (phone.length > 0)
			resolve(phone[0]);
		resolve({})
	})
}

export const fetchCategories = async () => {
	return new Promise(resolve => {
		resolve(categories)
	})
}
