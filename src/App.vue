<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <el-container>
    <!-- 頂部導航欄 -->
    <el-header>
      <el-menu mode="horizontal" router>
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/about">About</el-menu-item>
      </el-menu>
    </el-header>

    <!-- 主要內容 -->
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>
