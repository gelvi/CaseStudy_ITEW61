<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>Add Task</h1>
    <div class="form-group">
      <input type="text" v-model="newTask" placeholder="Enter task" class="task-input">
      <button @click="addTask" class="add-button">Add Task</button>
    </div>
    <p class="message">{{ message }}</p>
    <p class="error">{{ error }}</p>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { taskList } from '../data/items.js';

export default {
  name: 'AddTaskView',
  components: {
    HelloWorld
  },
  data() {
    return {
      taskList: taskList,
      error:'',
      newTask: '',  
      message: ''
    };
  },
  methods: {
    incrementId(){
      taskList.id++
    },
    addTask() {
      if(this.newTask == ''){
        this.error="Please enter a task";
      }else{
        this.error="";
        taskList.push({ id: this.id ,text: this.newTask, completed: false });
        this.newTask = '';
        this.incrementId();
        this.message = "New task Added!"
      }
    },  
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}

.task-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
}

.add-button {
  margin-left: 5px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.message {
color: #777; /* Dark gray color */
margin-bottom: 20px;
}

.add-button:hover {
  background-color: #45a049;
}

.error {
  color: red;
}
</style>
