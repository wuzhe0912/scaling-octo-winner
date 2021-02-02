<template lang="pug">
.container
  .puzzle-container
    .todo-puzzle
      ul
        li(v-for="node in todoPuzzle.list.data" :key="node.url")
          div {{ node.url }}
          img(:src="node.url")
    .done-puzzle
      ul
        li
          img(src="")
</template>

<script>
import { reactive, onMounted } from 'vue';
import data from '@/api/puzzle.js';

export default {
  name: 'Puzzle',

  setup() {
    // init Puzzle
    const todoPuzzle = reactive({
      list: [],
    });
    // move Puzzle
    const movePuzzle = reactive({
      content: [],
    });

    onMounted(() => {
      console.log(1, data);
      todoPuzzle.list = data;
      console.log(todoPuzzle.list);
    });

    return {
      todoPuzzle,
      movePuzzle,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  height: 400px;
}

.puzzle-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #233245;
  width: 800px;
}

.todo-puzzle {
  width: 300px;
  height: 300px;
  background-color: #fff;

  > img {
    display: flex;
    width: 100%;
    height: 100%;
  }
}

.done-puzzle {
  width: 300px;
  height: 300px;
  background-image: url('../assets/images/Puzzle/bg2.jpg');
  background-size: 100% 100%;
}
</style>
