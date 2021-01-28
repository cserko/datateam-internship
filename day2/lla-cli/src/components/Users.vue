<template>
    <div class="user-board" >
        <h3>
            USERS
        </h3>
        <div class="user" v-bind:key="user.id" v-for="user in users">
            <p> 
                {{user.name}} {{user.surname}}
            </p>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: "Serkan",
                    surname: "Tan",
                    password: "1234"
                },
                {
                    id: 2,
                    name: "Elon",
                    surname: "Musk",
                    password: "12345"
                }
            ],

        }
    }
}
</script>

<style scoped>
  .user {
    font-family: Arial, Helvetica, sans-serif;
    color: darkcyan;

  }
  .user-board {
    float:left;
    padding: 100px;
    margin: 10px -10px;
    border-radius: 5%;
    background: lightpink;
  }
</style>
