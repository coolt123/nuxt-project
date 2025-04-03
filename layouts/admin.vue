<template>
  <a-layout style="min-height: 100vh" v-if="isAntdReady">
    <!-- Sidebar -->
    <AdminSidebar />

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

<script setup>
import AdminSidebar from "~/components/admincomponent/AdminSidebar.vue";
import AdminHeader from "~/components/admincomponent/AdminHeader.vue";
import { ref, onBeforeMount } from "vue";
import { useAuth } from "~/composable/useAuth";
const isAntdReady = ref(false);
const router = useRouter();
const { getRole } = useAuth();
onBeforeMount(() => {
  const role = getRole();
  // Kiểm tra vai trò người dùng ngay khi trang admin được tải
  if (role !== "Adminisrtator") {
    // Nếu không phải là admin, chuyển hướng về trang chính
    router.push("/");
  } else {
    isAntdReady.value = true; // Set flag khi chuẩn bị sẵn sàng
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
