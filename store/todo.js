export const state = () => ({
  todos: []
})

export const getters = {
  getTodos: state => {
    return state.todos
  }
}

export const actions = {
  add({ commit, state }, e) {
    commit('addTodo', e.target.value)
  }
}

export const mutations = {
  // stateは必ず必要なやつ、textが引数でとってくるtodoの内容
  addTodo (state, text) {
    state.todos.push ({
      id: state.todos.length + 1,
      text: text,
      done: false
    })
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}