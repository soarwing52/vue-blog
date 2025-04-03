<template>
  <el-card class="weather-card">
    <h3>Weather Data</h3>
    <el-alert v-if="error" type="error" show-icon>{{ error }}</el-alert>
    <el-skeleton v-if="loading" animated />
    <pre v-else>{{ weatherData }}</pre>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const weatherData = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchWeather = async () => {
  try {
    const response = await fetch('https://my-first-worker.soarwing52hot.workers.dev/api/weather', {
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    })

    if (!response.ok) throw new Error(`Error: ${response.statusText}`)

    weatherData.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchWeather)
</script>

<style scoped>
.weather-card {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
</style>
