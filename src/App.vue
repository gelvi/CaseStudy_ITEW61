<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Add Task</router-link> || 
    <router-link to="/taskList" class="nav-link">Task List</router-link> 
  </nav>
  <router-view/>
</template>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}

.nav-link:hover {
  color: #42b983;
}
</style>
