<template>
  <el-card class="main-card">
    <h3>隧道口即時影像</h3>
    <el-image
      :src="imageSrc"
      fit="contain"
      :preview-src-list="[imageSrc]"
      class="cctv-image"
      referrerpolicy="no-referrer"
    >
      <template #error>
        <div class="image-slot">
          <el-icon><icon-picture /></el-icon>
          <span>影像暫時無法顯示</span>
        </div>
      </template>
    </el-image>
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import moment from 'moment'
import { ElIcon } from 'element-plus'
import { Picture as IconPicture } from '@element-plus/icons-vue'

const getTimestampedUrl = () => {
  const timestamp = moment().format('x') // milliseconds since epoch
  return `https://cctv-ss01.thb.gov.tw/T2-88K+150(S)?timestamp=${timestamp}`
}

const imageSrc = ref(getTimestampedUrl())

onMounted(() => {
  setInterval(() => {
    imageSrc.value = getTimestampedUrl()
  }, 100000) // refresh every 100s
})
</script>

<style scoped>
.cctv-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.image-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-size: 25px;
  height: 200px;
}
</style>
