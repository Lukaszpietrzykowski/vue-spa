<template>
  <div class="todo-list">
    <TodoForm :onSubmit="addTodo"/>
    <Todo
      :todos="todos"
      :removeTodo="removeTodo"
      :updateTodo="updateTodo"
      :editTodo="editTodo"
    />
  </div>
</template>

<style>
.todo-list {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 20px;
}

body {
  zoom: 140%;
}
</style>

<script>
import axios from "axios";
import TodoForm from "./TodoForm.vue";
import Todo from "./TodoItem.vue";

// const baseUrl = "http://localhost:8080"
const baseUrl = "https://todolist-30rr.onrender.com";

export default {
  components: {
    TodoForm,
    Todo,
  },
  data() {
    return {
      todos: [],
    };
  },
  created() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      axios.get(`${baseUrl}/todo`).then((response) => {
        this.todos = response.data;
      });
    },
    addTodo(todo) {
      if (todo.text === "") {
        return;
      }
      axios.post(`${baseUrl}/todo`, {
        text: todo.text,
      })
        .then(() => this.getTodos());
    },
    removeTodo(id) {
      axios.delete(`${baseUrl}/todo`, {
        params: {
          id: id,
        },
      })
        .then(() => this.getTodos());
    },
    editTodo(todoItem, inputText) {
      axios.put(`${baseUrl}/todo`, {
        id: todoItem.id,
        text: inputText,
        completed: todoItem.completed,
      })
        .then(() => this.getTodos());
    },
    updateTodo(todoItem) {
      todoItem.completed = !todoItem.completed;
      axios.put(`${baseUrl}/todo`, {
        id: todoItem.id,
        text: todoItem.text,
        completed: todoItem.completed,
      })
        .then(() => this.getTodos());
    },
  },
};
</script>
