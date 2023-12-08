<script setup>
import { ref, computed, watch } from 'vue'

const data = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jim Smith' },
  { id: 4, name: 'Sarah Johnson' },
]

const searchTerm = ref('')

const filteredData = computed(() => {
  return data.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchTerm.value.toLocaleLowerCase())
  )
})

watch(searchTerm, (value) => {
  console.log(`Search term changed to: ${value}`)
})
</script>

<template>
  <div>
    <input v-model="searchTerm" />
    <ul>
      <li v-for="item in filteredData" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
