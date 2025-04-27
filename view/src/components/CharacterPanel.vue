<script setup lang="ts">
import { computed } from 'vue'
import DataInput from '@/components/DataInput.vue'

const props = defineProps<{
  characterData: Record<string, unknown>[]
}>()
</script>

<template>
  <div>
    <h3>角色</h3>
    <div>
      <div v-for="(character, index) in characterData" :key="index">
        <div v-if="character" class="mt-4">
          <h4>{{ character._name }}</h4>
          <div>
            <DataInput :name="`等级`" v-model="character._level"></DataInput>
            <DataInput :name="`最大等级`" v-model="character._maxLevel"></DataInput>
            <DataInput :name="`生命值`" v-model="character._hp"></DataInput>
            <DataInput :name="`魔法值`" v-model="character._mp"></DataInput>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
