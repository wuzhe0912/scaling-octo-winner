import { reactive, toRefs } from 'vue';
import axios from 'axios';

const getDogImage = async (url) => {
  const state = reactive({
    loading: true,
    formData: [],
  });

  await axios
    .get(url)
    .then((response) => {
      state.formData = response.data;
      state.loading = false;
    })
    .catch((error) => {
      console.log(error);
      state.loading = false;
    });

  return { ...toRefs(state) };
};

export { getDogImage };
