import { createStore } from 'vuex'
import loginModule from './modules/login/login'
import menuModule from './modules/nav-menu'
import headerModule from './modules/header'
import systemModule from './modules/main/system'
import productModule from './modules/main/product'

const store = createStore({
  state: () => ({}),
  mutations: {},
  actions: {},
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

  // store.dispatch('getInitialDataAction')
}

export default store
