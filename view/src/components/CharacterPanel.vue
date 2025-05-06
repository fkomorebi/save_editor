<script setup lang="ts">
import DataInput from '@/components/DataInput.vue'

const characterData = defineModel<SaveData["actors"]["_data"]>()

</script>

<template>
  <div>
    <h3>角色</h3>
    <div>
      <div v-for="(character, index) in characterData" :key="index">
        <div v-if="character && character._name" class="mt-4 p-2">
          <h4>{{ `${$t('ed.name')}: ${character._name}` }}</h4>
          <div class="border p-2 rounded-lg">
            <DataInput :name="$t('ed.level')" v-model="character._level"></DataInput>
            <DataInput :name="$t('ed.maxLevel')" v-model="character._maxLevel"></DataInput>
            <DataInput :name="$t('ed.hp')" v-model="character._hp"></DataInput>
            <DataInput :name="$t('ed.mp')" v-model="character._mp"></DataInput>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
