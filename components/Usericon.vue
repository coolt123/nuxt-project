<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-dasharray="20" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M6 19v-1c0 -2.21 1.79 -4 4 -4h4c2.21 0 4 1.79 4 4v1">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/>
          </path>
          <path d="M12 11c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3Z">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="20;0"/>
          </path>
        </g>
      </svg>
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0" v-if="!isAuthenticated">
          <nuxt-link to="/auth/register">Register Now!</nuxt-link>
        </a-menu-item>
        <!-- Chỉ hiển thị link đăng nhập khi người dùng chưa đăng nhập -->
        <a-menu-item key="1" v-if="!isAuthenticated">
          <nuxt-link to="/auth/login">Login</nuxt-link>
        </a-menu-item>
        <!-- Chỉ hiển thị link đăng xuất khi người dùng đã đăng nhập -->
        <a-menu-item key="2" v-if="isAuthenticated">
          <a @click="handleLogout">Logout</a>
        </a-menu-item>
        <a-menu-item key="3">
          <nuxt-link to="/auth/resetpassword" v-if="!isAuthenticated">Reset</nuxt-link>
        </a-menu-item>
        <a-menu-item key="4">
          <nuxt-link to="/auth/change" v-if="isAuthenticated">Change Pass</nuxt-link>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { useAuth } from "~/composable/useAuth";

const {logout, isAuthenticated } = useAuth();
// Hàm đăng xuất
const handleLogout = async () => {
  try {
    await logout();  // Xóa token khỏi cookie
    console.log("Đăng xuất thành công");
    // Có thể redirect đến trang khác sau khi logout nếu cần
    // router.push("/auth/login");
  } catch (error) {
    console.error("Đăng xuất thất bại", error);
  }
};
</script>
