<template>
  <el-card class="main-card">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12" v-for="o in 4" :key="o">
        <img
          :src="`https://www.cwa.gov.tw/Data/fcst_img/QPF_ChFcstPrecip_12_${o * 12}.png?T=2025033010-3`"
          class="responsive-img"
        />
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
}
</style>
