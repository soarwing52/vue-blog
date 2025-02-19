<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- 頂部導航欄 -->
  <el-header>
    <el-menu
      mode="horizontal"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">Tech</el-menu-item>
      <el-menu-item index="/about">Outdoor</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
    </el-menu>
  </el-header>

  <!-- 主要內容 -->
  <el-main>
    <RouterView />
  </el-main>
</template>

<style scoped>
.el-header {
  width: 100vw !important;
  background-color: transparent !important;
  padding: 0;
}
.el-menu--horizontal {
  width: 100% !important;
}

.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
