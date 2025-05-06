<script setup lang="ts">
import JsonEditorVue from "json-editor-vue3"
const model = defineModel()
</script>

<template>
  <JsonEditorVue v-model="model" currentMode="tree" :modelList="['tree', 'code', 'form', 'text', 'view']"/>
</template>

<style scoped>

</style>
