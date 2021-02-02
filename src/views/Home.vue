<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png" ref="imgRef")
  div {{ text }}
  div {{ number }}
  div {{ name }}
</template>

<script>
// @ is an alias to /src
import { ref, reactive, toRefs, onMounted } from 'vue';

export default {
  name: 'Home',

  setup() {
    const state = reactive({
      text: 'Game!',
      number: 100,
      name: 'Player',
    });
    const imgRef = ref(null);

    onMounted(() => {
      console.log(imgRef.value);
    });

    setTimeout(() => {
      state.text = 'New Game!';
      state.number = 200;
      state.name = 'New Player';
    }, 1500);

    return {
      ...toRefs(state),
      imgRef,
    };
  },
};
</script>
