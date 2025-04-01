<template>
  <!-- <header>
        <nav>
          <div class="mid">
            <NuxtLink to="/"> Home</NuxtLink>
            <NuxtLink to="/VCT"> Shop</NuxtLink>
            <NuxtLink to="/about"> About</NuxtLink>
            <NuxtLink to="/Sanpham"> Contact</NuxtLink>
          </div>
          <div class="bot">
            <NuxtLink to="/admin/Login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    stroke-dasharray="20"
                    stroke-dashoffset="20"
                    d="M5 21v-1c0 -2.21 1.79 -4 4 -4h4c2.21 0 4 1.79 4 4v1"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.2s"
                      values="20;0"
                    />
                  </path>
                  <path
                    stroke-dasharray="20"
                    stroke-dashoffset="20"
                    d="M11 13c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.2s"
                      dur="0.2s"
                      values="20;0"
                    />
                  </path>
                  <path stroke-dasharray="6" stroke-dashoffset="6" d="M20 3v4">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.5s"
                      dur="0.2s"
                      values="6;0"
                    />
                    <animate
                      attributeName="stroke-width"
                      begin="1s"
                      dur="3s"
                      keyTimes="0;0.1;0.2;0.3;1"
                      repeatCount="indefinite"
                      values="2;3;3;2;2"
                    />
                  </path>
                  <path stroke-dasharray="2" stroke-dashoffset="2" d="M20 11v0.01">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.7s"
                      dur="0.2s"
                      values="2;0"
                    />
                    <animate
                      attributeName="stroke-width"
                      begin="1.3s"
                      dur="3s"
                      keyTimes="0;0.1;0.2;0.3;1"
                      repeatCount="indefinite"
                      values="2;3;3;2;2"
                    />
                  </path>
                </g></svg
            ></NuxtLink>
            <NuxtLink to="/watchtest"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10.5 13.5l-7.5 7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"/></path></g></svg></NuxtLink>
            <NuxtLink to="/parent"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"/></path></svg></NuxtLink>
            <NuxtLink to="/author"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"/></svg></NuxtLink>
          </div>
        </nav>
      </header> -->
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        <NuxtLink to="/home"> Home</NuxtLink>
      </a-menu-item>
      <a-menu-item key="2"> <NuxtLink to="/"> Home</NuxtLink></a-menu-item>
      <a-menu-item key="3"> <NuxtLink to="/auth/login1"> login1</NuxtLink></a-menu-item>
      <a-menu-item key="4">
        <NuxtLink to="/auth/register"> register</NuxtLink></a-menu-item
      >
      <a-menu-item key="4"><Usericon/></a-menu-item
      >
    </a-menu>
  </a-layout-header>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Usericon from "../Usericon.vue";
const selectedKeys = ref<string[]>(["2"]);
</script>
<style scoped></style>
