import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 999
  },
  mutations: {
    plus(){
      this.state.num += 1
    },
    minus(){
      this.state.num -= 1
    }
  },
  actions: {
    plusAction(context){
      context.commit('plus')
    },
    minusAction(context){
      context.commit('minus')
    }
  },
  getters: {}
})