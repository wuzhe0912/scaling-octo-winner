import { ref } from 'vue';

const useMousePosition = () => {
  const x = ref(0);
  const y = ref(0);

  return {
    x,
    y,
  };
};

export { useMousePosition };
