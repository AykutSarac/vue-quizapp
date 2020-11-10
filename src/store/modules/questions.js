// initial state
const state = {
    info: []
  }
  
  // getters
  const getters = {}
  
  // actions
  const actions = {
  }
  
  // mutations
  const mutations = {
    set (state, newState) {
      state.info.splice(0)
      state.info.push.apply(state.info, newState)
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }