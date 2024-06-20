export default {
  namespaced: true,
  state() {
    return {
      data: {
        transferFg: 100,
        fgInvLevel: 100,
        absenteeismRate: 100,
        p1: 100,
        p2: 100,
        ip: 100,
        rubber: 100,
        stockfit: 100,
      }
    }
  },
  mutations: {
    setData(state, payload) {
      state.data = payload
    }
  },
  getters: {
    getData(state) {
      return state.data
    }
  },
  actions: {
    saveData({ commit }, payload) {
      commit('setData', payload)
    }
  }
}