<template>
    <div class="container">
      <TodoList/>
      <CreateTodo/>
    </div>
</template>

<script>
import TodoList from '../components/TodoList'
import CreateTodo from '../components/CreateTodo'
export default {
  name: 'Home',
  components: {
    TodoList,
    CreateTodo
  }
}
</script>

<style scoped>

</style>
