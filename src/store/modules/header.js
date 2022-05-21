import router from '../../router/index'
export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    logout() {
      router.replace('/login')
      localStorage.clear()
    }
  }
}
