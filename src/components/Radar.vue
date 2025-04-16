<script setup lang="ts">
import { computed } from 'vue'
import { Picture as IconPicture } from '@element-plus/icons-vue'
import moment from 'moment'

// Example of generating the full image URL
const imageUrl = computed(() => {
  const now = moment()
  const rounded = moment(now)
    .minutes(Math.floor(now.minutes() / 10) * 10)
    .seconds(0)
  const adjusted = rounded.subtract(10, 'minutes')
  const formatted = adjusted.format('YYYYMMDDHHmm')
  return `https://www.cwa.gov.tw/Data/radar/CV1_3600_${formatted}.png`
})
</script>

<template>
  <div>
    <el-card class="main-card">
      <h3>雷達回波</h3>
      <img :src="imageUrl" alt="Radar Image" class="radar-img" referrerpolicy="no-referrer" />
    </el-card>
  </div>
</template>

<style scoped>
.radar-img {
  max-width: 500px;
  max-height: 500px;
  min-width: 200px;
  min-height: 200px;
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
