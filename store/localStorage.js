export const state = () => ({
    data: {
        productsLocal: [],
        productsCart: [],
        expire: 1
    }
})

export const mutations = {
    setProducts(state, products) {
        state.data.productsLocal = products
    },
    addProductsButton(state, index) {
        state.data.productsLocal[index].add = true
    },
    deleteProductsButton(state, index) {
        state.data.productsLocal[index].add = false
    },
    addProducts(state, data) {
        state.data.productsCart.push(data)
    },
    removeProducts(state, index) {
        state.data.productsCart.splice(index, 1)
    },
    selectNumber(state, data) {
        state.data.productsCart[data.index].selectNumbers = data.n
    },
    checkUpdatePrice(state, data) {
        state.data.productsCart[data.index].price = data.price
    },
    checkUpdatePriceLocal(state, data) {
        state.data.productsLocal[data.index].price = data.price
    },
    removeProductsLocal(state, data) {
        state.data.productsLocal.splice(data.index, 1)
    },
    clearProductsCart(state) {
        state.data.productsCart = []
    },
    clearProductsLocal(state) {
        state.data.productsLocal = []
    }
}

export const actions = {
    async fetchProducts({commit, state}) {
        try {
            if (state.data.productsLocal.length === 0) {
                let products = await this.$axios.$get('/api/product')
                commit('setProducts', products)
            }
        } catch (e) {
            throw e
        }
    },
    async addProductsButton({ commit }, index) {
        commit('addProductsButton', index)
    },
    async deleteProductsButton({ commit }, index) {
        commit('deleteProductsButton', index)
    },
    async addProducts({commit}, data) {
        commit('addProducts', data)
    },
    async removeProducts({commit}, index) {
        commit('removeProducts', index)
    },
    async selectNumber({commit}, data) {
        commit('selectNumber', data)
    },
    async checkUpdate({commit, state}) {
        if (state.data.productsCart.length !== 0) {
            let context = this
            state.data.productsCart.forEach(async function callback(item, index){
                let products = await context.$axios.$post('/api/product/product-update', {title: item.title})
                if (Boolean(products) === true) {
                    commit('checkUpdatePrice', {price: products.price, index: index})
                    commit('checkUpdatePriceLocal', {price: products.price, index: item.index})
                } else {
                   await commit('removeProductsLocal', { index: item.index })
                    commit('removeProducts', index)
                }
            })
        }
    },
    async clearProductsCart({commit, state}) {
        commit('clearProductsCart')
    },
    async clearProductsLocal({commit, state}) {
        commit('clearProductsLocal')
    }
}

export const getters = {
    productsLocal: state => state.data.productsLocal,
    productsCart: state => state.data.productsCart
}