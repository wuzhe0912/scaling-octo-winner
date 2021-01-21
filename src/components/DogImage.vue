<template lang="pug">
.dog-container
  .list-loading(v-if="loading") Loading...
  .list-wrap(v-else)
    .list-image(
      v-for="(node, index) in data"
      :key="node"
      v-show="index === imageIndex"
    )
      img(:src="node")
  .list-btn
    button.btn-prev(@click="imagePrev") Prev
    button.btn-next(@click="imageNext") Next
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
import { getDogImage } from '../hooks/useURLLoader.js';

export default {
  name: 'DogImage',

  setup() {
    const state = reactive({
      loading: true,
      data: [],
      imageIndex: 0,
    });

    onMounted(async () => {
      const { formData, loading } = await getDogImage(
        'https://dog.ceo/api/breed/hound/images/random/8'
      );
      state.data = formData.value.message;
      state.loading = loading;
    });

    const imagePrev = () => {
      state.imageIndex--;
      if (state.imageIndex < 0) {
        state.imageIndex = state.data.length - 1;
      }
    };

    const imageNext = () => {
      state.imageIndex++;
      if (state.imageIndex === state.data.length) {
        state.imageIndex = 0;
      }
    };

    return {
      ...toRefs(state),
      imagePrev,
      imageNext,
    };
  },
};
</script>

<style lang="scss" scoped>
.list-wrap {
  display: flex;
  justify-content: center;
}

.list-image {
  width: 400px;
  height: 300px;
  margin-bottom: 12px;
  border: 4px solid #42b983;

  img {
    width: 100%;
    height: 100%;
  }
}

.list-btn {
  button {
    cursor: pointer;
    margin-right: 12px;
  }
}
</style>
