import {
  getPageListData,
  getMenuList
} from '../../../service/main/system/system'

export default {
  namespaced: true,
  state: () => ({
    userList: [],
    userCount: null,
    roleList: [],
    roleCount: null,
    menuList: []
  }),
  mutations: {
    changeUserList(state, userList) {
      state.userList = userList
    },
    changeUserCount(state, userCount) {
      state.userCount = userCount
    },
    changeRoleList(state, userList) {
      state.roleList = userList
    },
    changeRoleCount(state, userCount) {
      state.roleCount = userCount
    },
    changeMenuList(state, menuList) {
      state.menuList = menuList
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const { pageUrl, queryInfo, pageName } = payload
      const pageResult = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = pageResult.data.data
      console.log(list)

      switch (pageName) {
        case 'user':
          commit('changeUserList', list)
          commit('changeUserCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', list)
          commit('changeRoleCount', totalCount)
          break
      }
    },
    async getPageMenuList({ commit }, payload) {
      const { url } = payload
      const pageResult = await getMenuList(url)
      console.log(pageResult.data.data.list)
      commit('changeMenuList', pageResult.data.data.list)
    }
  }
}
