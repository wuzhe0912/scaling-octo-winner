import { ref, onMounted } from 'vue';

const useMousePosition = () => {
  const x = ref(0);
  const y = ref(0);
  const trackingMouse = (node) => {
    x.value = node.pageX;
    y.value = node.pageY;
  };

  onMounted(() => {
    document.addEventListener('click', trackingMouse);
  });

  return { x, y };
};

export { useMousePosition };
