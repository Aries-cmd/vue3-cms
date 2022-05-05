import router from '../../router/index'
import { login as loginAPI } from '@/service/login.js'

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || ''
  }),
  mutations: {
    setToken(state, token) {
      localStorage.setItem('token', token)
      state.token = token
    }
  },
  actions: {
    login({ commit }, userInfo) {
      loginAPI(userInfo)
        .then((res) => {
          window.$message.success('登陆成功')

          // 调用设置 token 方法
          commit('setToken', res.data.data.token)

          router.replace('/home')
        })
        .catch((err) => {
          window.$message.error(err.response.data)
        })
    }
  }
}
