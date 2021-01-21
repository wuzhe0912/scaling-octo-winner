<template lang="pug">
.position-container
  div 網頁X座標：{{ x }} - 網頁Y座標：{{ y }}
</template>

<script>
import { useMousePosition } from '../hooks/useMousePosition.js';

export default {
  name: 'MousePosition',

  setup() {
    const { x, y } = useMousePosition();

    return {
      x,
      y,
    };
  },
};
</script>

<style scoped lang="scss"></style>
