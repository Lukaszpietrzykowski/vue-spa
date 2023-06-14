<template>
  <div class="todo-app">
    <span class="todo-tittle">Co masz dziś do zrobienia✍️</span>
    <TodoList/>
  </div>
</template>

<style>

.todo-app {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-width: 180px;
  min-height: 400px;
  text-align: center;
  margin: 140px auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border: 2px solid #ced4da;
  border-radius: 1rem;
}

.todo-input {
  min-width: 1px;
  padding: 6px;
  border-radius: 5px;
  border: 2px solid black;
  flex-grow: 1;
}

.btn-remove,
.btn-edit,
.btn-submit {
  color: white;
  background-color: #5C636A;
  padding: 6px 15px 6px 15px;
  margin-left: 10px;
  border-radius: 5px;
  border: 2px solid black;
}

@media (max-width: 600px) {
  .btn-remove,
  .btn-edit {
    color: white;
    background-color: #5C636A;
    padding: 6px 15px 6px 15px;
    margin-left: 10px;
    border-radius: 5px;
    border: 2px solid black;
    margin-top: 5px;
  }
}

body {
  zoom: 140%;
}

.todo-tittle {
  margin-top: 10px;
  font-size: 35px;
  font-family: 'Open Sans', sans-serif;
}

</style>

<script setup>
import TodoList from "@/components/TodoList.vue";
</script>
