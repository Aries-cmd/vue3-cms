import router from '../../../router/index'
import {
  login as loginAPI,
  getUserInfo,
  getMenuList
} from '@/service/login/login.js'
import { mapMenusToRoutes } from '../../../utils/map-menus'

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    userMenus: JSON.parse(localStorage.getItem('userMenus')) || []
  }),
  mutations: {
    setToken(state, token) {
      localStorage.setItem('token', token)
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
      localStorage.setItem('userMenus', JSON.stringify(userMenus))

      // 注册动态路由
      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async login({ commit, dispatch }, userInfo) {
      // 登录
      const loginResult = await loginAPI(userInfo)

      if (loginResult.data.data) {
        window.$message.success('登陆成功')

        // 调用设置 token 方法
        commit('setToken', loginResult.data.data.token)

        const { id } = loginResult.data.data

        // 获取用户信息
        const userInfoResult = await getUserInfo(id)
        commit('changeUserInfo', userInfoResult.data.data)

        // 请求用户菜单
        const userMenusResult = await getMenuList(id)
        commit('changeUserMenus', userMenusResult.data.data)

        // 发送初始化的请求(完整的role/department)
        dispatch('getInitialDataAction', null, { root: true })

        router.replace('/main')
      }
    },
    loadLocalLogin({ commit }) {
      const token = localStorage.getItem('token')
      if (token) {
        commit('setToken', token)
      }
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = JSON.parse(localStorage.getItem('userMenus'))
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}
