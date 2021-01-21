<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  div {{ text }}
  div {{ number }}
  div {{ name }}
</template>

<script>
// @ is an alias to /src
import { reactive, toRefs } from 'vue';

export default {
  name: 'Home',

  setup() {
    const state = reactive({
      text: 'Game!',
      number: 100,
      name: 'Player',
    });

    setTimeout(() => {
      state.text = 'New Game!';
      state.number = 200;
      state.name = 'New Player';
    }, 1500);

    return {
      ...toRefs(state),
    };
  },
};
</script>
