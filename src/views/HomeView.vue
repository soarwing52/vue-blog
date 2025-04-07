<script setup lang="ts">
import { computed } from 'vue'
import YoutubeStream from '@/components/YoutubeStream.vue'
import LiveCam from '@/components/LiveCam.vue'
import WeatherCard from '@/components/WeatherCard.vue'
import RainForecast from '@/components/RainForecast.vue'
</script>

<template>
  <h1>龍洞天氣站</h1>

  <WeatherCard />
  <YoutubeStream />
  <LiveCam />
  <RainForecast />
</template>

<style>
iframe {
  width: 100%;
  height: 450px;
  border-radius: 8px;
}

.responsive-img {
  max-height: 100vh;
  width: auto;
  height: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;
}
</style>
