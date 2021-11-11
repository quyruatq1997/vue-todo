<template>
  <div class="container">
    <div class="ui centered grid info">
      <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
      <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    </div>
    <SearchBar></SearchBar>
    <draggable v-model="filterList">
      <transition-group
        name="list"
        tag="p"
        class="ui grid"
      >
        <TodoItem
          v-bind:to-do="todo"
          v-for="(todo,index) in filterList"
          v-bind:key="`key-${index}`"
          v-bind:index="`key-${index}`"
        />
      </transition-group>
    </draggable>
  </div>
</template>

<script type="text/javascript">
import TodoItem from './TodoListItem'
import SearchBar from './SearchBar'
import {store} from '../store/store'
import draggable from 'vuedraggable'

export default {
  store: store,
  name: 'TodoList',
  components: {
    SearchBar,
    TodoItem,
    draggable
  },
  computed: {
    todos () {
      return this.$store.state.todos
    },
    filterList: {
      get () {
        return (this.$store.getters.getFilter || this.$store.getters.getTodos)
      },
      set (value) {
        this.$store.commit('updateList', value)
      }
    }
  }
}
</script>

<style scoped>
  .list {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .info {
    margin-bottom: 10px;
  }
  .ui .card:first-child {
    margin-top: 1em
  }
  .ui .card:last-child {
    margin-bottom: 1em
  }
</style>
