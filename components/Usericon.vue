<template>
  <a-dropdown >
    <a class="ant-dropdown-link">
      <nuxt-link :to="isAuthenticated ? '/customer/profile' : '/auth/login'"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-dasharray="20" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M6 19v-1c0 -2.21 1.79 -4 4 -4h4c2.21 0 4 1.79 4 4v1">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/>
          </path>
          <path d="M12 11c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3Z">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="20;0"/>
          </path>
        </g>
      </svg> </nuxt-link>
     
    </a>
    <template #overlay>
      <a-menu style="width: 250px;">
        <a-menu-item key="0" v-if="!isAuthenticated">
          <nuxt-link to="/auth/register">Register Now!</nuxt-link>
        </a-menu-item>
        <!-- Chỉ hiển thị link đăng nhập khi người dùng chưa đăng nhập -->
        <a-menu-item key="1" v-if="!isAuthenticated">
          <nuxt-link to="/auth/login">Login</nuxt-link>
        </a-menu-item>
        <!-- Chỉ hiển thị link đăng xuất khi người dùng đã đăng nhập -->
        <a-menu-item key="2" v-if="isAuthenticated">
          <nuxt-link to="/customer"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"style="vertical-align: middle; transform: translateY(0px);"><g fill="none" stroke="#000" stroke-width="1"><rect width="14" height="17" x="5" y="4" rx="2" /><path stroke-linecap="round" d="M9 9h6m-6 4h6m-6 4h4"/></g></svg> Đơn hàng của tôi</nuxt-link>
        </a-menu-item>
        <a-menu-item key="3" v-if="isAuthenticated">
          <nuxt-link to="/auth/login"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" style="vertical-align: middle; transform: translateY(0px);"><path fill="#000" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"/></svg> Sản phầm yêu thích </nuxt-link>
        </a-menu-item>
        <a-menu-item key="4" v-if="isAuthenticated" style="display: flex; align-items: center; gap: 10px ">
          <a @click="handleLogout"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" style="vertical-align: middle; transform: translateY(0px);"><path fill="#000" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h6q.425 0 .713.288T12 20t-.288.713T11 21zm12.175-8H10q-.425 0-.712-.288T9 12t.288-.712T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7t.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288t-.713-.313q-.275-.3-.262-.712t.287-.688z"/></svg> Logout</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { useAuth } from "~/composable/useAuth";

const {logout, isAuthenticated } = useAuth();
// Hàm đăng xuất
const router = useRouter();
const handleLogout = async () => {
  try {
    await logout();  // Xóa token khỏi cookie
    console.log("Đăng xuất thành công");
    // Có thể redirect đến trang khác sau khi logout nếu cần
    router.push("/");
  } catch (error) {
    console.error("Đăng xuất thất bại", error);
  }
};
</script>
