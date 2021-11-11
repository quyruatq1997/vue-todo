<template>
  <div class="ui centered labeled input card mb-lg-5">
    <sui-dropdown
      class="ui label"
      placeholder="Select category"
      selection
      :options="options"
      v-model="current"
    />
<!--    <div class="ui label">-->
<!--      Search title-->
<!--    </div>-->
    <input type="text" v-model="search" placeholder="Search title.." v-on:input="filter">
  </div>
</template>

<script>
import {store} from '../store/store'

export default {
  store: store,
  name: 'SearchBar',
  data () {
    return {
      search: '',
      current: null,
      options: [
        {
          text: 'Title',
          value: 1
        },
        {
          text: 'Project',
          value: 2
        }
      ]
    }
  },
  methods: {
    filter () {
      this.$store.commit('filteredList', {todo: this.search, category: this.current})
    }
  },
  mounted () {
  }
}

</script>

<style scoped>
</style>
