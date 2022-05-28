import {
  getPageListData,
  getMenuList,
  deletePageData,
  createUserData,
  editUserData
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

      switch (pageName) {
        case 'users':
          commit('changeUserList', list)
          commit('changeUserCount', totalCount)
          break
        case 'roles':
          commit('changeRoleList', list)
          commit('changeRoleCount', totalCount)
          break
      }
    },
    async getPageMenuList({ commit }, payload) {
      const { url } = payload
      const pageResult = await getMenuList(url)
      commit('changeMenuList', pageResult.data.data.list)
    },
    async deletePageDataAction({ dispatch }, payload) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      const result = await deletePageData(pageUrl)
      window.$message.success(result.data.data)
      dispatch('getPageListAction', {
        pageUrl: '/users/list',
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createUserDataAction({ dispatch }, payload) {
      const { url, data } = payload
      const result = await createUserData(url, data)
      window.$message.success(result.data.data)

      dispatch('getPageListAction', {
        pageUrl: '/users/list',
        pageName: 'users',
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editUserDataAction({ dispatch }, payload) {
      const { url, data } = payload
      const result = await editUserData(url, data)
      window.$message.success(result.data.data)

      dispatch('getPageListAction', {
        pageUrl: '/users/list',
        pageName: 'users',
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
