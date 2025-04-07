<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="12" :md="6" v-for="o in 4" :key="o">
      <img
        :src="`https://www.cwa.gov.tw/Data/fcst_img/QPF_ChFcstPrecip_12_${o * 12}.png?T=2025033010-3`"
        class="responsive-img"
      />
    </el-col>
  </el-row>
</template>
