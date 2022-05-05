import { createStore } from 'vuex'
import loginModule from './module/login'
import menuModule from './module/nav-menu'

export default createStore({
  state: () => ({}),
  mutations: {},
  actions: {},
  modules: {
    loginModule,
    menuModule
  }
})
