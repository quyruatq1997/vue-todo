<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {store} from './store/store'

export default {
  store: store,
  name: 'App',
  components: {
  },
  data () {
    if (!localStorage.getItem('todos')) {
      localStorage.setItem('todos', JSON.stringify(this.$store.getters.getTodos))
    }
    return {
      todos: JSON.parse(localStorage.getItem('todos'))
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 60px;
  min-height: 100%;
  background-image: url("./assets/journal-gcbd6b654e_1920.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
