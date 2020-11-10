import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/questions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    questions // replace with whatever you want to call it
  }
})