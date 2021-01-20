<template lang="pug">
.about-container
  .list
    button.list-btn(
      v-for="node in list"
      :key="node.code"
      @click="change(node.code)"
    ) {{ node.name }}
  TodoApp(v-if="select === 'todo'")
  GetPosition(v-if="select === 'getPosition'")
</template>

<script>
import { ref } from 'vue';
import TodoApp from '@/components/TodoApp.vue';
import GetPosition from '@/components/GetPosition.vue';

export default {
  name: 'About',

  components: {
    TodoApp,
    GetPosition,
  },

  setup() {
    const list = ref([]);
    const select = ref('todo');

    list.value = [
      { name: 'Todo App', code: 'todo' },
      { name: 'Get Page Position', code: 'getPosition' },
      { name: 'Get Dog API', code: 'dogApi' },
      // { name: 'Todo App', code: 'todo' },
    ];

    const change = (code) => {
      select.value = code;
    };

    return {
      list,
      select,
      change,
    };
  },
};
</script>

<style lang="scss" scoped>
.list-btn {
  margin-right: 6px;
  margin-bottom: 12px;
  cursor: pointer;
}
</style>
