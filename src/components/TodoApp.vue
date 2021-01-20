<template lang="pug">
.container
  form.todo-form(@submit.prevent="handleAdd")
    label New Todo List
    .btn-wrap
      input(v-model="newTodo" name="newTodo")
      button Add
    .list-wrap
      .list-select(v-if="todos.length > 0")
        div
          input(type="checkbox" @click="handleAll")
          span Select All
        button(@click="handleClear") All Clear
      .list-container(v-for="(todo, index) in todos" :key="todo.id")
        .list-content
          input(type="checkbox" @click="handleCheck(todo)" :checked="todo.status")
          .list-text(:class="{ 'list-done': todo.status }") {{ todo.text }}
        button.list-btn(@click="handleDelete(index)") X
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TodoApp',

  setup() {
    const newTodo = ref('');
    const todos = ref([]);

    const handleAdd = () => {
      if (newTodo.value !== '') {
        todos.value.push({
          id: Date.now(),
          status: false,
          text: newTodo.value,
        });
        newTodo.value = '';
      }
    };

    const handleCheck = (todo) => {
      todo.status = !todo.status;
    };

    const handleDelete = (index) => {
      todos.value.splice(index, 1);
    };

    const handleAll = () => {
      todos.value.forEach((item) => {
        item.status = !item.status;
      });
    };

    const handleClear = () => {
      todos.value = [];
    };

    return {
      newTodo,
      todos,
      handleAdd,
      handleCheck,
      handleDelete,
      handleAll,
      handleClear,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}

.todo-form {
  display: flex;
  flex-direction: column;
  width: 360px;
}

.btn-wrap {
  display: flex;
  justify-content: center;
  input {
    width: 100%;
  }
  button {
    margin-left: 10px;
    width: 60px;
  }
}

.list-select {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;

  button {
    cursor: pointer;
  }
}

.list-container {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
}

.list-content {
  display: flex;
}

.list-done {
  text-decoration: line-through;
}

.list-btn {
  color: red;
  cursor: pointer;
}
</style>
