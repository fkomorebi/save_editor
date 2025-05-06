<script setup lang="ts">
const props = defineProps<{
  name: string;
}>()
const model = defineModel()

</script>

<template>
  <div class="data-input">
    <span>
      {{$t(name)}}:
    </span>
    <input
      class="border border-[rgba(0,0,0,0)] hover:border-[rgba(0,0,0,1)] rounded px-1"
      type="number"
      v-model="model"
    />
  </div>
</template>

<style scoped>
.data-input + .data-input {
  margin-top: 4px;
}
</style>
