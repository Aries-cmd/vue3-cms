export default {
  namespaced: true,
  state: () => ({
    collapsed: false,
    logPaddingLeft: '20px',
    defaultExpandedKeys:
      localStorage.getItem('defaultExpandedKeys') || '系统总览',
    defaultValue: localStorage.getItem('defaultValue') || '核心技术'
  }),
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed
      if (state.collapsed) {
        state.logPaddingLeft = '10px'
      } else {
        state.logPaddingLeft = '20px'
      }
    },
    changeDefaultExpandedKeys(state, defaultExpandedKeys) {
      state.defaultExpandedKeys = defaultExpandedKeys
      localStorage.setItem('defaultExpandedKeys', defaultExpandedKeys)
    },
    changeDefaultValue(state, defaultValue) {
      state.defaultValue = defaultValue
      localStorage.setItem('defaultValue', defaultValue)
    }
  },
  actions: {}
}
