import { createStore } from 'vuex'
import loginModule from './modules/login/login'
import menuModule from './modules/nav-menu'
import headerModule from './modules/header'
import systemModule from './modules/main/system'
import productModule from './modules/main/product'
import { getPageListData } from '../service/main/system/system'

const store = createStore({
  state: () => ({
    pagination: {
      pageSize: 5
    },
    entireDepartment:
      JSON.parse(localStorage.getItem('entireDepartment')) || [],
    entireRole: JSON.parse(localStorage.getItem('entireRole')) || []
  }),
  mutations: {
    changePagination(state, item) {
      switch (item.name) {
        case 'pageSize':
          state.pagination.pageSize = item.size
          break
      }
    },
    changeEntireDepartment(state, list) {
      localStorage.setItem('entireDepartment', JSON.stringify(list))
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      localStorage.setItem('entireRole', JSON.stringify(list))
      state.entireRole = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data.data

      // 2.保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    loginModule,
    menuModule,
    headerModule,
    systemModule,
    productModule
  }
})

export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

export default store
