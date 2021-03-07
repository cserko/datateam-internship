<template>
  <div id="app">
    <img alt="datateam logo" src="./assets/logo.png">
    <Customer />
  </div>

  
</template>

<script>
import Customer from "./components/Customer"

export default {
  name: 'App',
  components: {
    Customer,
  },
  data() {
    return {
        currentPage: 1,
        totalPages: 10
    }
  },
  methods: {
  // ...
  pageChangeHandler(selectedPage) {
    this.currentPage = selectedPage
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
