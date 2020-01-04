export const state = () => ({
	products: []
})

export const mutations = {
	setProducts(state, products) {
		state.products = products
	}
}

export const actions = {
	async adminProducts({commit}) {
		try {
			let products = await this.$axios.$get('/api/product/admin')
			commit('setProducts', products)
		} catch (e) {
			throw e
		}
	},
	async removeProduct({commit, dispatch}, title) {
		try {
			await this.$axios.$delete('/api/product/admin', { data: { title: title}})
			dispatch('adminProducts')
		} catch (e) {
			throw e
		}
	},
	async updateProduct({commit}, data) {
		try {
			return await this.$axios.$put('/api/product/admin', data)
		} catch (e) {
			throw e
		}
	}
}

export const getters = {
	products: state => state.products
}