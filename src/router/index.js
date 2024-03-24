import { createRouter, createWebHistory } from 'vue-router'
import TaskListView from '../views/TaskListView.vue'
import AddTaskView from '../views/AddTaskView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AddTaskView // Change to TaskListView
  },
  {
    path: '/taskList',
    name: 'taskList',
    component: TaskListView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
