<template>
  <el-card class="main-card">
    <h3>即時影像</h3>
    <iframe :src="videoUrl" frameborder="0" allowfullscreen></iframe>
  </el-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const videoId = 'aB6G95xqBrw'

const videoUrl = computed(
  () => `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1`,
)
</script>
<style scoped>
iframe {
  width: 100%;
  aspect-ratio: 16 / 9; /* Keeps proper video ratio */
  border-radius: 8px;
  border: none;
  max-height: 100vh; /* Prevent from overflowing screen on very small devices */
}
</style>
