<template>
  <el-card class="weather-card">
    <h3>中央氣象局預報</h3>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane v-for="(dayData, date) in groupedByDay" :key="date" :name="date">
        <template #label>
          <span class="tab-label">
            {{ date }}
            <el-icon v-if="dayData?.available"> <Sunny class="weather-icon sunny" /></el-icon>
            <el-icon v-else><Pouring class="weather-icon rain" /></el-icon>
          </span>
        </template>

        <el-row :gutter="10" class="weather-grid">
          <el-col :xs="8" :sm="6" :md="4" v-for="item in dayData.data" :key="item.Time">
            <div class="weather-div">
              <div class="time">{{ item.Time.split(' ')[1] }}</div>

              <div class="info">
                <span class="temp" :class="{ hot: Number(item.Temperature) > 30 }">
                  {{ item.Temperature }}°C
                </span>
                <span
                  class="rain"
                  :class="{
                    heavy: Number(item.ProbabilityOfPrecipitation) > 60,
                    moderate:
                      Number(item.ProbabilityOfPrecipitation) > 20 &&
                      Number(item.ProbabilityOfPrecipitation) <= 60,
                    light: Number(item.ProbabilityOfPrecipitation) <= 20,
                  }"
                >
                  {{ item.ProbabilityOfPrecipitation }}%
                  <el-icon v-if="Number(item.ProbabilityOfPrecipitation) > 60">
                    <Pouring />
                  </el-icon>
                  <el-icon v-else-if="Number(item.ProbabilityOfPrecipitation) > 20">
                    <Cloudy />
                  </el-icon>
                  <el-icon v-else>
                    <Sunny />
                  </el-icon>
                </span>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Sunny, Cloudy, Pouring } from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus'
import moment from 'moment-timezone'

const weatherData = ref([])

const loading = ref(true)
const error = ref(null)

const groupedByDay = computed(() => {
  const groups = {}
  for (const item of weatherData.value) {
    const date = item.Time.split(' ')[0]

    if (!groups[date]) groups[date] = []
    groups[date].push(item)
  }

  const result = {}
  for (const [date, items] of Object.entries(groups)) {
    const available = items.every((item) => Number(item.ProbabilityOfPrecipitation) < 40)
    result[date] = {
      available,
      data: items,
    }
  }

  return result
})

let host = 'https://my-first-worker.soarwing52hot.workers.dev'
host = 'http://127.0.0.1:8787'
const fetchWeather = async () => {
  try {
    const response = await fetch(`${host}/api/weather`, {
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    })

    if (!response.ok) throw new Error(`Error: ${response.statusText}`)
    const resJson = await response.json()
    const newTapeiData = resJson.records.Locations[0]
    const weatherElement = newTapeiData.Location[0].WeatherElement
    const temperature = weatherElement.find((x) => x.ElementName == '溫度')
    const rainChance = weatherElement.find((x) => x.ElementName == '3小時降雨機率')

    const result = temperature.Time.map((temp) => {
      const tempTime = new Date(temp.DataTime)
      const temperature = temp.ElementValue[0].Temperature

      const matchingRain = rainChance.Time.find((rain) => {
        const start = new Date(rain.StartTime)
        const end = new Date(rain.EndTime)
        return tempTime >= start && tempTime < end
      })

      return {
        Time: moment.tz(temp.DataTime, 'Asia/Taipei').format('MM/DD HH:mm'),
        Temperature: temperature,
        ProbabilityOfPrecipitation: matchingRain
          ? matchingRain.ElementValue[0].ProbabilityOfPrecipitation
          : null,
      }
    })
    weatherData.value = result
    activeName.value = result[0].Time.split(' ')[0]
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchWeather)

const activeName = ref('')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const getWeatherIcon = (prob: string | number) => {
  const value = Number(prob)
  if (value > 60) return Pouring
  if (value > 20) return Cloudy
  return Sunny
}
</script>

<style scoped>
.weather-card {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
.weather-grid {
  row-gap: 5px; /* adds vertical spacing between rows */
  display: flex;
  flex-wrap: wrap;
}

.weather-div {
  background-color: #f9fafc;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  text-align: center;
  font-size: 14px;
}

.time {
  font-weight: bold;
  font-size: 15px;
  color: #333;
  margin-bottom: 2px;
}

.temp {
  color: #ff7043;
  font-weight: 500;
}

.temp.hot {
  color: #e53935; /* deeper red */
}

.rain {
  color: #409eff;
  font-size: 13px;
}

.rain.heavy {
  color: #1e88e5; /* deeper blue */
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.el-icon {
  vertical-align: middle;
  margin-right: 6px;
}

.tab-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 18px;
}

.weather-icon {
  font-size: 20px;
}

.sunny {
  color: orange;
}

.rain {
  font-size: 14px;
  font-weight: 500;
}

.rain.heavy {
  color: rgb(7, 19, 184); /* Darker blue for heavy rain */
}

.rain.moderate {
  color: rgb(65, 133, 222); /* Lighter blue/green for moderate rain */
}

.rain.light {
  color: #ff7043; /* Light orange for light rain */
}
</style>
