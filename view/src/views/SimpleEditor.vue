<script setup lang="ts">
import CharacterPanel from "@/components/CharacterPanel.vue";

const model = defineModel<SaveData>()
const characterData = computed(()=>model.value!.actors._data)
</script>

<template>
  <CharacterPanel v-model="characterData"></CharacterPanel>
</template>

<style scoped>

</style>
