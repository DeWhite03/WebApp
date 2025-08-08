<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>
    <v-btn @click="count++">You clicked me {{ count }} times.</v-btn>
  </div>
</template>
