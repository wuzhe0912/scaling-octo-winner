<template lang="pug">
.about-container
  .list
    button.list-btn(
      v-for="(node, index) in list"
      :key="node.code"
      @click="change(node.code, index)"
      :class="{ 'select-style': index === selectIndex }"
    ) {{ node.name }}
  TodoApp(v-if="select === 'todo'")
  MousePosition(v-if="select === 'mousePosition'")
  DogImage(v-if="select === 'dogImage'")
  Puzzle(v-if="select === 'puzzle'")
</template>

<script>
import { ref } from 'vue';
import TodoApp from '@/components/TodoApp.vue';
import MousePosition from '@/components/MousePosition.vue';
import DogImage from '@/components/DogImage.vue';
import Puzzle from '@/components/Puzzle.vue';

export default {
  name: 'About',

  components: {
    TodoApp,
    MousePosition,
    DogImage,
    Puzzle,
  },

  setup() {
    const list = ref([]);
    const select = ref('todo');
    const selectIndex = ref(0);

    list.value = [
      { name: 'Todo App', code: 'todo' },
      { name: 'Get Page Position', code: 'mousePosition' },
      { name: 'Get Dog Image', code: 'dogImage' },
      { name: 'Puzzle Game', code: 'puzzle' },
    ];

    const change = (code, index) => {
      select.value = code;
      selectIndex.value = index;
    };

    return {
      list,
      select,
      selectIndex,
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

.select-style {
  color: #42b983;
}
</style>
