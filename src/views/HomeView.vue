<script setup lang="ts">
import { ref } from 'vue'

const articles = ref([
  { id: 1, title: '我的第一篇文章', summary: '這是摘要內容...' },
  { id: 2, title: 'Vue 3 新功能解析', summary: '深入了解 Vue 3 的 Composition API...' },
])
</script>

<template>
  <el-container>
    <!-- 側邊欄 -->
    <el-aside width="250px">
      <el-card>
        <h3>分類</h3>
        <el-menu>
          <el-menu-item index="1">技術</el-menu-item>
          <el-menu-item index="2">生活</el-menu-item>
          <el-menu-item index="3">旅行</el-menu-item>
        </el-menu>
      </el-card>
    </el-aside>

    <!-- 文章內容 -->
    <el-main>
      <el-card v-for="article in articles" :key="article.id" class="article-card">
        <h2>{{ article.title }}</h2>
        <p>{{ article.summary }}</p>
        <el-button type="primary">閱讀更多</el-button>
      </el-card>
    </el-main>
  </el-container>
</template>

<style>
.el-header {
  background-color: #409eff;
  color: white;
  text-align: center;
  font-size: 20px;
  line-height: 60px;
}

.article-card {
  margin-bottom: 20px;
}
</style>
