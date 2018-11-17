import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'todos.done', done: true },
      { id: 2, text: 'todos.toBedone', done: false }
    ]
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state){
      state.count--
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    countMul_6 :state => {
      return state.count*6
    },
  }
})