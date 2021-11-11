import Vue from 'vue'
import Vuex from 'vuex'
// Create a new store instance.

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [{
      title: 'Todo A',
      project: 'Project A',
      done: false
    }, {
      title: 'Todo B',
      project: 'Project B',
      done: true
    }, {
      title: 'Todo C',
      project: 'Project C',
      done: false
    }, {
      title: 'Todo D',
      project: 'Project D',
      done: false
    }],
    filter: null
  },
  getters: {
    getTodos: (state) => state.todos,
    getFilter: (state) => state.filter
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    updateTodo (state, todo) {
      console.log(state, todo)
      const index = state.todos.indexOf(todo)
      state.todos[index].title = todo.title
      state.todos[index].project = todo.project
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    deleteTodo (state, todo) {
      const todoIndex = state.todos.indexOf(todo)
      state.todos.splice(todoIndex, 1)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    completeTodo (state, todo) {
      const todoIndex = state.todos.indexOf(todo)
      state.todos[todoIndex].done = true
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    filteredList (state, payload) {
      if (payload.category === 1) {
        state.filter = state.todos.filter(item => {
          return item.title.toLowerCase().includes(payload.todo.toLowerCase())
        })
      } else if (payload.category === 2) {
        state.filter = state.todos.filter(item => {
          return item.project.toLowerCase().includes(payload.todo.toLowerCase())
        })
      }
    },
    updateList (state, value) {
      this.state.filter = value
      this.state.todos = value
      localStorage.setItem('todos', JSON.stringify(value))
    }
  },
  actions: {
  }
})
