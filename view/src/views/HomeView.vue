<script setup lang="ts">
import { ref } from 'vue';
const selectFile = (e: DragEvent | MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();

  let file: File | null = null;
  if (e instanceof DragEvent) {
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      file = files[0];
    }
  } else if (e instanceof MouseEvent) {
    // 打开文件选择框选择文件
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = () => {
      if (input.files && input.files.length > 0) {
        file = input.files[0];
      }
      if (file) {
        handleFile(file);
      }
    };
    input.click();
  }
  if (file) {
    handleFile(file);
  }
}

const handleFile = (file: File) => {
  console.log('File name:', file.name);
  console.log('File size:', file.size);
  console.log('File type:', file.type);

  // 将文件转换为 Blob 对象
  // const blob = new Blob([file], { type: file.type });
  // console.log('Blob:', blob);
  // console.log('File', file)
  window.ipc_bridge.load_file('load_file', file)
}

const handleDragOver = (e: DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
}
</script>

<template>
  <div class="p-6">
    <div class="h-30 bg-blue-400 rounded-lg" @click="selectFile" @drop="selectFile" @dragover="handleDragOver">
      <div class="w-full h-full rounded-lg border-4 border-amber-100 flex justify-center items-center">
        选择文件，或将文件拖拽到此
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 添加一些样式以美化组件 */
.drop-area {
  cursor: pointer;
}
</style>
