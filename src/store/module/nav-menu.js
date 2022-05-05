export default {
  namespaced: true,
  state: () => ({
    collapsed: false,
    logPaddingLeft: '20px'
  }),
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed
      if (state.collapsed) {
        state.logPaddingLeft = '10px'
      } else {
        state.logPaddingLeft = '20px'
      }
    }
  },
  actions: {}
}
