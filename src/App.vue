<script setup lang="ts">
import { ref } from 'vue';
import BabylonCanvas from './components/BabylonCanvas.vue';
import MyFooter from './components/MyFooter.vue';

const envFileUrl = ref("../environment.env");
const modelUrl = ref("../Nap.glb");

const onEnvFileSelected = (url: string) => {
  envFileUrl.value = url;
}

const onModelFileSelected = (url: string) => {
  modelUrl.value = url;
}
</script>

<template>
  <BabylonCanvas :environmentFileUrl="envFileUrl" :modelUrl="modelUrl" />
  <MyFooter @modelFileSelected="onModelFileSelected" @envFileSelected="onEnvFileSelected" />
</template>
