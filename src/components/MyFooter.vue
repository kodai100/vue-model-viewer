<script lang="ts">
import FileOpenButton from './FileOpenButton.vue';
import LogoLink from '../components/LogoLink.vue';
</script>

<template>
    <div class="absolute left-0 right-0 bottom-0 h-[100px] p-5 text-white bg-black/50 ">
      <div class="flex">
        <div class="flex-1">
          <div class="flex gap-x-5">
            <FileOpenButton label="Environment" accept=".hdr" @fileSelected="selectEnvironmentFile" />
            <FileOpenButton label="Model" accept=".glb" @fileSelected="selectModelFile" />
          </div>
        </div>
        <div class="flex-none m-auto">
            <LogoLink />
        </div>
      </div>
    </div>
</template>


<script setup lang="ts">

interface Emits {
    (event: 'envFileSelected', url: String): void;
    (event: 'modelFileSelected', url: String): void;
}

const emit = defineEmits<Emits>();

const selectEnvironmentFile = (url: string) => {
  emit("envFileSelected", url);
}

const selectModelFile = (url: string) => {
  emit("modelFileSelected", url);
}
</script>