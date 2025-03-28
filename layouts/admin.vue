<template>
  <a-layout style="min-height: 100vh;" v-if="isAntdReady">
    <!-- Sidebar -->
    <AdminSidebar />

    <a-layout style="flex-direction: column;">
      <!-- Header -->
      <AdminHeader />

      <!-- Content Area -->
      <a-layout-content class="content">
        <slot></slot>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
  <div v-else>
    .....Đang tải giao diện
  </div>
</template>

<script lang="ts" setup>
import AdminSidebar from "~/components/admincomponent/AdminSidebar.vue";
import AdminHeader from "~/components/admincomponent/AdminHeader.vue";
import { ref, onBeforeMount } from "vue";
const isAntdReady = ref(false);

onBeforeMount(() => {
    isAntdReady.value = true;
 // Giả lập trễ 0.5s để kiểm tra
});
</script>

<style scoped>
.content {
  padding: 20px;
  background: #fff;
  flex: 1;
  margin-top: 64px; /* Đẩy content xuống để tránh bị Header che */
}
.loading {
  text-align: center;
  padding: 50px;
  font-size: 18px;
  font-weight: bold;
}
</style>
