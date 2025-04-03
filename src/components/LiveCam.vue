<template>
  <el-card class="live-cam">
    <h3>Live Camera</h3>
    <img :src="imageSrc" alt="Live Camera" class="cctv-image" referrerpolicy="no-referrer" />
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const imageSrc = ref('https://cctv-ss01.thb.gov.tw/T2-88K+150(S)?timestamp=' + Date.now())

const refreshImage = () => {
  imageSrc.value = `https://cctv-ss01.thb.gov.tw/T2-88K+150(S)?timestamp=${Date.now()}`
}

// Refresh image every 10 seconds
onMounted(() => {
  setInterval(refreshImage, 10000)
})
</script>

<style scoped>
.live-cam {
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.cctv-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
