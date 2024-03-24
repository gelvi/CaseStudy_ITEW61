<template>
  <div>
    <h1>Task List</h1>
    <ul class="task-list">
      <li v-for="task in taskList" :key="task.id" class="task-item">
        <input type="checkbox" v-model="task.completed" class="task-checkbox">
        <span>{{ task.text }}</span>
        <button v-if="!editedTask || editedTask.id !== task.id" @click="updateTask(task)" class="update-button">Update</button>
        <input v-if="editedTask && editedTask.id === task.id" v-model="updatedTaskText" @keyup.enter="saveTask" @keyup.esc="cancelEdit" class="edit-input">
        <button v-if="!editedTask || editedTask.id !== task.id" @click="deleteTask(task)" class="delete-button">Delete</button>
        <button v-if="editedTask && editedTask.id === task.id" @click="saveTask" class="save-button">Save</button>
        <button v-if="editedTask && editedTask.id === task.id" @click="cancelEdit" class="cancel-button">Cancel</button>
      </li>
    </ul>
    <p v-if="taskList.length === 0">No tasks available</p>
    <p v-else>Total tasks: {{ totalTasks }}</p>
    <p>Completed tasks: {{ completedTasks }}</p>
    <p>Message: {{ taskMessage }}</p>
  </div>
</template>

<script>
import { taskList } from '../data/items.js';

export default {
  data() {
    return {
      taskList: taskList,
      editedTask: null,
      updatedTaskText: ''
    };
  },
  methods: {
    deleteTask(task) {
      const index = this.taskList.findIndex(t => t.id === task.id);
      this.taskList.splice(index, 1);
    },
    updateTask(task) {
      this.editedTask = task;
      this.updatedTaskText = task.text;
    },
    saveTask() {
      if (this.editedTask) {
        this.editedTask.text = this.updatedTaskText;
        this.editedTask = null;
        this.updatedTaskText = '';
      }
    },
    cancelEdit() {
      this.editedTask = null;
      this.updatedTaskText = '';
    }
  },
  computed: {
    totalTasks() {
      return this.taskList.length;
    },
    completedTasks() {
      return this.taskList.filter(task => task.completed).length;
    },
    taskMessage() {
      if (this.completedTasks === 0) {
        return 'No tasks completed';
      } else if (this.completedTasks < this.totalTasks) {
        return 'Some tasks completed';
      } else {
        return 'All tasks completed';
      }
    }
  }
}
</script>

<style scoped>
.task-list {
  list-style-type: none;
  padding: 0;
}

.task-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.task-checkbox {
  margin-right: 10px;
}

.edit-input {
  margin-right: 10px;
}

.update-button {
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.update-button:hover {
  background-color: #368962;
}

.save-button {
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


.cancel-button {
  margin-left: 5px;
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-button:hover,
.cancel-button:hover {
  background-color: #368962;
}

.delete-button {
  margin-left: 5px;
  padding: 5px 10px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #cc4125;
}
</style>
