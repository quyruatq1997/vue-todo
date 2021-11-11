<template>
  <div class='ui basic content center aligned segment container'>
    <b-button class='ui primary button icon' v-on:click="openForm" v-show="!isCreating" v-b-modal.modal-prevent-closing>
      <i class='plus icon'></i>
    </b-button>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Add new todo"
      @show="openForm"
      @hidden="closeForm"
      @ok="sendForm"
    >
      <label>Title</label>
      <b-input
        v-model="titleText"
        type='text'
        ref='title'
        defaultValue=""
      />
      <label>Project</label>
      <b-input
        v-model="projectText"
        type='text'
        ref='project'
        defaultValue=""
      />
    </b-modal>
  </div>
</template>

<script>
import {store} from '../store/store'
export default {
  name: 'CreateTodo',
  store: store,
  data () {
    return {
      titleText: '',
      projectText: '',
      isCreating: false,
      name: '',
      nameState: null,
      submittedNames: []
    }
  },
  methods: {
    openForm () {
      this.isCreating = true
      window.$('.mini.modal')
        .modal('show')
    },
    closeForm () {
      this.isCreating = false
      window.$('.mini.modal')
        .modal('hide')
    },
    sendForm () {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText
        const project = this.projectText
        this.$store.commit('addTodo', {
          title,
          project,
          done: false
        })
        this.titleText = ''
        this.projectText = ''
      }
      this.isCreating = false
      window.$('.mini.modal')
        .modal('hide')
    }
  }
}
</script>

<style scoped>
</style>
