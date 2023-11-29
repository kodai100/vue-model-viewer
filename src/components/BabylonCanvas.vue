<template>
    <canvas ref="bjsCanvas" :width="width" :height="height"></canvas>
</template>
  
<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { createScene, resetEnvironment, loadModel } from '../scenes/MyFirstScene'; 
  
  const bjsCanvas = ref<HTMLCanvasElement|null>(null);
  
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);
  
  interface Props {
    environmentFileUrl: string;
    modelUrl: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    modelUrl : '../Nap.glb', 
    environmentFileUrl: '../environment.env',
  });

  watch(() => props.environmentFileUrl, () => {
    console.log('environmentFileUrl changed');
    resetEnvironment(props.environmentFileUrl);
  });

  watch(() => props.modelUrl, () => {
    console.log('modelUrl changed');
    loadModel(props.modelUrl);
  });

  onMounted(() => {
  
      if (bjsCanvas.value) {
        createScene(bjsCanvas.value);
      }
  
      window.addEventListener('resize', handleResize)
  
  });
  
  const handleResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }
  
</script>