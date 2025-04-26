<script setup lang="ts">
const props = defineProps<{
  name: string;
}>()
const model = defineModel()

</script>

<template>
  <div>
    <span>
      {{name}}
    </span>
    <input
      type="number"
      v-model="model"
      />
  </div>
</template>

<style scoped>

</style>
