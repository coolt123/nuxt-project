<template>
  <a-layout style="min-height: 100vh;">
    <!-- Sidebar -->
    <Sidebar />

    <a-layout style="flex-direction: column;">
      <!-- Header -->
      <Header />

      <!-- Content Area -->
      <a-layout-content class="content">
        <slot></slot>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Sidebar from "~/components/Sidebar.vue";
import Header from "~/components/Header.vue";
</script>

<style scoped>
.content {
  padding: 20px;
  background: #fff;
  flex: 1;
  margin-top: 64px; /* Đẩy content xuống để tránh bị Header che */
}
</style>
