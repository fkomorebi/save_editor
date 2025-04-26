<script setup lang="ts">
import { ref } from 'vue';
import CharacterPanel from '@/components/CharacterPanel.vue'

const props = defineProps<{
  saveData: SaveData;
}>();

const exportSaveData = () => {
  window.ipcBridge.exportSaveFile(JSON.stringify(props.saveData))
};
</script>

<template>
  <CharacterPanel :character-data="saveData.actors._data"></CharacterPanel>
  <div>
    <button @click="exportSaveData">导出存档</button>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

button {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

pre {
  background-color: #f8f9fa;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
