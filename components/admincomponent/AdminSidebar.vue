<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="5">
        <pie-chart-outlined />
        <span>
          <NuxtLink to="/admin/User">Home</NuxtLink>
        </span>
      </a-menu-item>
      <a-menu-item key="6">
        <pie-chart-outlined />
        <span>
          <NuxtLink to="/admin/User">Home</NuxtLink>
        </span>
      </a-menu-item>
      <a-menu-item key="7">
        <pie-chart-outlined />
        <span>
          <NuxtLink to="/admin/User">Home</NuxtLink>
        </span>
      </a-menu-item>
      <a-menu-item key="8">
        <pie-chart-outlined />
        <span>
          <NuxtLink to="/admin/User">Home</NuxtLink>
        </span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);
</script>

<style scoped>
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>
