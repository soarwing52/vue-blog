<script setup lang="ts">
import { computed } from 'vue'
import moment from 'moment'

// Compute the base timestamp: last hour, minus one more hour
const baseTime = computed(() => {
  const now = moment()
  const floored = now.minutes(0).seconds(0).milliseconds(0)
  const adjusted = floored.subtract(1, 'hour')
  return adjusted.format('YYYY-MM-DD_HH00') // e.g. 2025-04-16_2000
})

// The suffixes representing 1–4 days of rainfall
const rainCodes = ['QZK8', 'QZL8', 'QZM8', 'QZN8']

// Build image URLs for all 4
const imageUrls = computed(() =>
  rainCodes.map((code) => `https://www.cwa.gov.tw/Data/rainfall/${baseTime.value}.${code}.jpg`),
)
</script>

<template>
  <el-card class="main-card">
    <h3>累積降雨圖</h3>
    <h4>（至 {{ baseTime }}）</h4>
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        v-for="(url, index) in imageUrls"
        :key="url"
        style="border: 1px solid #ccc; border-radius: 8px; padding: 10px"
      >
        <p style="text-align: center; margin-top: 8px">過去 {{ index + 1 }} 日累積</p>
        <el-image :src="url" class="responsive-img" fit="contain">
          <template #error>
            <div class="image-slot">
              <el-icon><icon-picture /></el-icon>
              <span>影像載入失敗</span>
            </div>
          </template>
        </el-image>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>
.responsive-img {
  max-height: 100vh;
  width: auto;
  height: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
}

.image-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-size: 14px;
  height: 200px;
}
</style>
