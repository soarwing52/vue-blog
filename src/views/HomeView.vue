<script setup lang="ts">
import YoutubeStream from '@/components/YoutubeStream.vue'
import LiveCam from '@/components/LiveCam.vue'
import WeatherCard from '@/components/WeatherCard.vue'
import RainForecast from '@/components/RainForecast.vue'

import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('forecast')

const handleClick = (tab: TabsPaneContext, event: Event) => {}
const links = [
  { label: '鼻頭角', link: 'https://www.cwa.gov.tw/V8/C/L/Harbors/Harbors.html?PID=I037' },
  { label: '福隆', link: 'https://www.cwa.gov.tw/V8/C/L/NatScenic/NatScenic.html?PID=E050' },
]
</script>

<template>
  <h1 class="title">龍洞天氣站</h1>
  <el-tabs v-model="activeName" class="main-card" @tab-click="handleClick">
    <el-tab-pane label="預報" name="forecast">
      <WeatherCard />
      <div class="external-links">
        <span class="label">外部連結:</span>
        <div class="buttons">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.link"
            target="_blank"
            rel="noopener"
          >
            <el-button style="margin: 2px">{{ link.label }}</el-button>
          </a>
        </div>
      </div>
      <RainForecast />
    </el-tab-pane>
    <el-tab-pane label="即時" name="live">
      <YoutubeStream />
      <LiveCam />
    </el-tab-pane>
  </el-tabs>
</template>

<style>
.title {
  text-align: center;
}

.external-links {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}
</style>
