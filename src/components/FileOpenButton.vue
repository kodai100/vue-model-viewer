<template>
    <input style="display: none" ref="fileInput" type="file" :accept="props.accept" @change="fileSelected()"/>
    <div class="p-5 bg-gray-800 text-white cursor-pointer rounded transition-colors hover:bg-gray-500" @click="btnClick()">
        {{ props.label }}
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const fileInput = ref<HTMLInputElement|null>(null);

interface Props {
    label: string;
    accept: string;
}

const props = withDefaults(defineProps<Props>(), {
    label: 'Open File',
    accept: 'image/jpg'
});

interface Emits {
    (event: 'fileSelected', url: String): void;
}

const emit = defineEmits<Emits>();

const fileSelected = async () => {
  if(fileInput.value){
    const file = fileInput.value.files![0];

    if(!file){
        return;
    }

    const url = URL.createObjectURL(file);
    emit("fileSelected", url);
  }
}

const btnClick = () => {
    if(fileInput.value){
        fileInput.value.click();
    }
}
</script>
