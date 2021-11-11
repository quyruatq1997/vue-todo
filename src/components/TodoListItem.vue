<template>
  <div class='ui centered card list-item' >
    <div class='content'>
      <div class='header'>
        {{ toDo.title }}
      </div>
      <div class='meta'>
        {{ toDo.project }}
      </div>
      <div class='extra content'>
        <span v-b-modal="index" class='right floated edit icon' v-on:click="openForm">
          <i class='edit icon'></i>
        </span>
        <span class='right floated trash icon' v-on:click="deleteTodo(toDo)">
          <i class='trash icon'></i>
        </span>
      </div>
    </div>
    <b-modal
      :id="index"
      ref="modal"
      title="Edit todo"
      @show="openForm"
      @hidden="closeForm"
      @ok="handleUpdate(toDo)"
    >
      <label>Title</label>
      <b-input
        v-model="toDo.title"
        type='text'
        ref='title'
        defaultValue=""
      />
      <label>Project</label>
      <b-input
        v-model="toDo.project"
        type='text'
        ref='project'
        defaultValue=""
      />
    </b-modal>
    <div class='ui bottom attached green basic button' v-show="!isEditing && toDo.done" disabled>
      Completed
    </div>
    <div class='ui bottom attached red basic button' v-show="!isEditing && !toDo.done" v-on:click="completeTodo(toDo)">
      Pending
    </div>
  </div>
</template>

<script>
import {store} from '../store/store'
export default {
  store: store,
  name: 'TodoItem',
  props: {
    toDo: Object,
    index: String
  },
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    openForm () {
      console.log('open form')
      window.$('.mini.modal')
        .modal('show')
    },
    closeForm () {
      window.$('.mini.modal')
        .modal('hide')
    },
    handleUpdate (todo) {
      console.log('update todo', todo)
      this.$store.commit('updateTodo', todo)
      this.isEditing = false
    },
    deleteTodo (todo) {
      this.$store.commit('deleteTodo', todo)
    },
    completeTodo (todo) {
      console.log('completeTodo')
      this.$store.commit('completeTodo', todo)
    }
  }
}
</script>

<style scoped>
</style>
