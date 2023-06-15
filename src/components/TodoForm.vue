<template>
  <form class="todo-form" @submit="handleSubmit">
    <input
      type="text"
      :placeholder="$t(`todo.placeholder`)"
      v-model="inputValue"
      class="todo-input"
    />
    <button type="submit" class="btn-submit">
      <font-awesome-icon :icon="faAdd"/>
    </button>
  </form>
</template>

<style>
.todo-form {
  display: flex;
  margin-bottom: 12px;
}
</style>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faAdd} from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    onSubmit: Function
  },
  data() {
    return {
      inputValue: ''
    };
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    faAdd() {
      return faAdd;
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.onSubmit({
        text: this.inputValue
      });
      this.inputValue = '';
    }
  }
};
</script>
