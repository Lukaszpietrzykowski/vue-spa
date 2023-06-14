<template>
  <div v-for="(todo, index) in todos" :key="index">
    <div v-if="edit.isEditing && edit.elementId === todo.id" class="todo-row">
      <input class="edit-input" v-model="inputText"/>
      <div class="todo-buttons">
        <button class="btn-submit" @click="editTodo(todo, inputText); setEdit(false, '')">
          <font-awesome-icon :icon="faCheck"/>
        </button>
        <button class="btn-edit" @click="setEdit(false, '')">
          <font-awesome-icon :icon="faXmark"/>
        </button>
      </div>
    </div>
    <div v-else class="todo-row">
      <span @click="updateTodo(todo)" :class="todo.completed ? 'todo-text crossed-line' : 'todo-text'">
        {{ todo.text }}
      </span>
      <div class="todo-buttons">
        <button class="btn-remove" @click="removeTodo(todo.id)">
          <font-awesome-icon :icon="faTrash"/>
        </button>
        <button class="btn-edit" @click="setEdit( true, todo.id); setInputText(todo.text)">
          <font-awesome-icon :icon="faPen"/>
        </button>
      </div>
    </div>
  </div>
</template>

<style>

.todo-row {
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .todo-row {
    display: flex;
    padding: 5px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center
  }
}

body {
  zoom: 140%;
}

.todo-buttons {
  display: flex;
  flex-wrap: nowrap;
}

.edit-input {
  min-width: 1px;
  padding: 6px;
  border-radius: 5px;
  border: 2px solid black;
  flex-grow: 1;
  margin-right: 5px;
}
.todo-text {
  flex-grow: 1;
  border: 2px solid #ced4da;
  padding: 5px;
  word-break: break-all;
  border-radius: 0.25rem;
  transition: 0.3s;
}

.todo-text:hover {
  background-color: #7cffcb;
}

.crossed-line {
  text-decoration: line-through;
  background-color: #7cffcb;
}

.todo-text.crossed-line:hover {
  background-color:rgba(134,134,134,1)
}

</style>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faPen, faTrash, faXmark, faCheck} from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    todos: Array,
    removeTodo: Function,
    updateTodo: Function,
    editTodo: Function
  },
  methods: {
    setEdit(isEditing, elementId) {
      this.edit.isEditing = isEditing;
      this.edit.elementId = elementId;
    },
    setInputText(todoText) {
      this.inputText = todoText;
    }
  },
  data() {
    return {
      edit: {
        isEditing: false,
        elementId: ''
      },
      inputText: ''
    };
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    faPen() {
      return faPen;
    },
    faTrash() {
      return faTrash;
    },
    faXmark() {
      return faXmark;
    },
    faCheck() {
      return faCheck;
    }
  }
};
</script>
