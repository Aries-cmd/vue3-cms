import { getPageListData } from '../../../service/main/system/system'

export default {
  namespaced: true,
  state: () => ({
    productList: [],
    productCount: null
  }),
  mutations: {
    changeProductList(state, productList) {
      state.productList = productList
    },
    changeProductCount(state, productCount) {
      state.productCount = productCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const { pageUrl, queryInfo, pageName } = payload
      const pageResult = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = pageResult.data.data

      switch (pageName) {
        case 'product':
          commit('changeProductList', list)
          commit('changeProductCount', totalCount)
          break
      }
    }
  }
}
