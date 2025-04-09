<script setup lang="ts">
import { RouterView } from 'vue-router'

const locations = [
  { label: '龍洞', route: '/' },
  { label: '北投', route: '/beitou' },
  { label: '德芙蘭', route: '/tefuren' },
  { label: '關子嶺', route: '/guanziling' },
  { label: '墾丁', route: '/kenting' },
]
</script>

<template>
  <!-- 頂部導航欄 -->
  <el-header class="nav-header">
    <el-menu
      mode="horizontal"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="nav-menu"
    >
      <template v-for="item in locations" :key="item.label">
        <el-menu-item :index="item.route">{{ item.label }}</el-menu-item>
      </template>
    </el-menu>
  </el-header>

  <!-- 主要內容 -->
  <el-main>
    <RouterView />
  </el-main>
</template>

<style scoped>
.nav-header {
  padding: 0;
}

.nav-menu {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
