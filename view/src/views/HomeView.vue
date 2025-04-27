<script setup lang="ts">
import { ref } from 'vue';
import SaveEditor from "@/components/SaveEditor.vue";
import JsonEditorVue from "json-editor-vue3"

const saveData = ref<SaveData>()

const selectFile = (e: DragEvent | MouseEvent, fileType: 'saveFile' | 'codecFile') => {
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
        handleFile(file, fileType);
      }
    };
    input.click();
  }
  if (file) {
    handleFile(file, fileType);
  }
}

const handleFile = async (file: File, fileType: 'saveFile' | 'codecFile') => {
  console.log('File name:', file.name);
  console.log('File size:', file.size);
  console.log('File type:', file.type);
  console.log()

  // 将文件转换为 Blob 对象
  // const blob = new Blob([file], { type: file.type });
  // console.log('Blob:', blob);
  // console.log('File', file)
  let fileData: string | null = null
  if (fileType === 'saveFile') {
    fileData = await window.ipcBridge.loadSaveFile(window.webUtils.getPathForFile(file))
  } else if (fileType === 'codecFile'){
    fileData = await window.ipcBridge.loadCodecFile(window.webUtils.getPathForFile(file))
  }
  if (fileData) {
    saveData.value = JSON.parse(fileData);
  }
  console.log(saveData.value)
}

const handleDragOver = (e: DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
}
</script>

<template>
  <div class="p-6">
    <div class="h-30 bg-blue-400 rounded-lg" @click="e=>selectFile(e, 'saveFile')" @drop="e=>selectFile(e, 'saveFile')" @dragover="handleDragOver">
      <div class="w-full h-full rounded-lg border-4 border-amber-100 flex justify-center items-center">
        选择存档文件，或将文件拖拽到此
      </div>
    </div>
    <div class="h-30 bg-blue-400 rounded-lg" @click="e=>selectFile(e, 'codecFile')" @drop="e=>selectFile(e, 'codecFile')" @dragover="handleDragOver">
      <div class="w-full h-full rounded-lg border-4 border-amber-100 flex justify-center items-center">
        选择存档加解密文件，或将文件拖拽到此
      </div>
    </div>
<!--    <SaveEditor v-if="saveData" :saveData="saveData" />-->
    <JsonEditorVue v-if="saveData" v-model="saveData" currentMode="tree" :modelList="['tree', 'code', 'form', 'text', 'view']"/>
  </div>
</template>

<style scoped>
/* 添加一些样式以美化组件 */
.drop-area {
  cursor: pointer;
}
</style>
