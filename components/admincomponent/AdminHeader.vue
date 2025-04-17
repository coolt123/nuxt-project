<template>
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        <NuxtLink to="/admin"> Home</NuxtLink>
      </a-menu-item>
      <a-menu-item key="2"> <NuxtLink to="/admin/booklistadmin"> Book</NuxtLink></a-menu-item>
      <a-menu-item key="3">
        <NuxtLink to="/admin/author"> Author</NuxtLink>
      </a-menu-item>
      <a-menu-item key="4">
        <NuxtLink to="/admin/categories"> Categories</NuxtLink>
      </a-menu-item>
      <a-menu-item key="5">
        <NuxtLink to="/admin/User"> User</NuxtLink>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Usericon from "../Usericon.vue";
const selectedKeys = ref<string[]>(["1"]);
</script>
<style scoped>
.a-layout-header {
  background: rgb(121, 212, 69);
  color: aqua;
}
</style>
