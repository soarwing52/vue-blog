<template>
  <el-card class="youtube-live">
    <h3>Live Stream</h3>
    <iframe :src="videoUrl" frameborder="0" allowfullscreen></iframe>
  </el-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const videoId = 'aB6G95xqBrw'

const videoUrl = computed(() => `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`)
</script>
<style scoped>
.youtube-live {
  max-width: 800px;
  margin: auto;
  text-align: center;
}
</style>
