<script setup lang="ts">
import { ref } from 'vue'

interface WeatherForecast {
  date: string
  temperatureC: number
  temperatureF: number
  summary: string
}

const results = ref<WeatherForecast[]>([])

const fetchResults = async () => {
  try {
    const res = await fetch('http://localhost:5241/weatherforecast')
    results.value = await res.json()
  } catch (error) {
    console.error('Fetch error:', error)
    results.value = []
  }
}

const count = ref(0)
</script>

<template>
  <div>
    <v-btn @click="count++">You clicked me {{ count }} times.</v-btn>
  </div>
  <div>
    <v-btn @click="fetchResults">Search</v-btn>
    <div v-if="results.length === 0">No results found.</div>
    <div v-else>
      <div v-for="item in results" :key="item.date">
        <p>
          {{ item.date }} - {{ item.temperatureC }}°C ({{ item.temperatureF }}°F) -
          {{ item.summary }}
        </p>
      </div>
    </div>
    <!-- <div v-for="item in results" :key="item"></div> -->
  </div>
</template>
