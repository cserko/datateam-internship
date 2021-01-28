<template>
  <div class="home">
    <Users />
    <Songs />
  </div>
</template>

<script>
// @ is an alias to /src
import Users from "../components/Users"
import Songs from "../components/Songs"
export default {
  name: 'Home',
  components: {
    Users,
    Songs
  }
}
</script>
<style scoped>

</style>