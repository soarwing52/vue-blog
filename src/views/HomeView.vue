<script setup lang="ts">
import { computed } from 'vue'
import LiveCam from '@/components/LiveCam.vue'
import WeatherCard from '@/components/WeatherCard.vue'
const videoId = 'aB6G95xqBrw' // Replace with your YouTube Live Video ID

const videoUrl = computed(() => `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`)
</script>

<template>
  <h1>龍洞天氣站</h1>
  <!-- 中央氣象局資料 -->
  <el-card class="youtube-live">
    <h3>Live Stream</h3>
    <iframe :src="videoUrl" frameborder="0" allowfullscreen></iframe>
  </el-card>
  <LiveCam />
  <!-- <WeatherCard /> -->

  <el-row>
    <el-col :span="6" v-for="o in 4" :key="o">
      <img
        :src="`https://www.cwa.gov.tw/Data/fcst_img/QPF_ChFcstPrecip_12_${o * 12}.png?T=2025033010-3`"
        height="450"
      />
    </el-col>
  </el-row>
  <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>中央氣象局資料</span>
      </div>
    </template>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    <template #footer>Footer content</template>
  </el-card>
  <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>Windy 資料</span>
      </div>
    </template>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    <template #footer>Footer content</template>
  </el-card>
</template>

<style>
.youtube-live {
  max-width: 800px;
  margin: auto;
  text-align: center;
}

iframe {
  width: 100%;
  height: 450px;
  border-radius: 8px;
}
</style>
