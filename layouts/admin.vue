<template>
  <a-layout style="min-height: 100vh" v-if="isAntdReady">
    <!-- Sidebar -->


    <a-layout style="flex-direction: column">
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
  <div v-else>.....Đang tải giao diện</div>
</template>

<script setup lang="ts">
import AdminSidebar from "~/components/admincomponent/AdminSidebar.vue";
import AdminHeader from "~/components/admincomponent/AdminHeader.vue";
import carousel from "~/components/carousel.vue";
import { ref, onBeforeMount } from "vue";
import { useAuth } from "~/composable/useAuth";
const isAntdReady = ref(false);
const router = useRouter();
const { getRole } = useAuth();
onBeforeMount(() => {
  const role = getRole();
  if (role !== "Adminisrtator") {
    router.push("/");
  } else {
    isAntdReady.value = true; 
  }
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
