<template>
  <header class="fixed-header">
    <nav class="nav-bar">
      <div class="logo-nav">
        <NuxtLink to="/" class="logo">LIBRARY</NuxtLink>
        <div class="nav-left">   
          <dropdown />
          <Search />
        </div>
      </div>
      <div class="nav-right">
        <client-only>
          <NuxtLink :to="isAuthenticated ? '/customer/profilecheck' : '/auth/login'"> <Usericon /> </NuxtLink>
          <NuxtLink to="/">
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
                <path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.2s"
                    values="4;0"
                  />
                </path>
                <path
                  stroke-dasharray="28"
                  stroke-dashoffset="28"
                  d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.2s"
                    dur="0.4s"
                    values="28;0"
                  />
                </path>
                <path
                  stroke-dasharray="8"
                  stroke-dashoffset="8"
                  d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.2s"
                    values="8;0"
                  />
                </path>
              </g>
            </svg>
          </NuxtLink>
          <NuxtLink to="/usercheck">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-dasharray="32"
                stroke-dashoffset="32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.7s"
                  values="32;0"
                />
              </path>
            </svg>
          </NuxtLink>
          <NuxtLink to="/cart"> <shoppingcart /> </NuxtLink>
        </client-only>
      </div>
    </nav>
  </header>
</template>

<script setup>
import Usericon from "./Usericon.vue";
import shoppingcart from "./shoppingcart.vue";
import Search from "./Search.vue";
import dropdown from "./dropdown.vue";
import { useAuth } from "~/composable/useAuth";
const {isAuthenticated } = useAuth();

</script>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 10px 0;
  height: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  flex-wrap: wrap;
}

.logo {
  font-size: 23px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  margin-right: 20px;
  flex: 1;
}
.logo-nav{
  display: flex;
  align-items: center;
  gap: 15px; /* khoảng cách giữa logo và left-nav */
  flex: 3;
}
/* Phần chứa dropdown và search */
.nav-left {
  display: flex;
  gap: 10px;
  flex: 4;
}

/* Phần chứa icon */
.nav-right {
  display: flex;
  align-items: center;
  gap: 30px;
  flex: 1;
  margin-left: 40px;
}

/* Responsive fix */
@media screen and (max-width: 768px) {
  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    flex-wrap: nowrap;
  }
  .logo {
    display: none;
  }
  .nav-right {
    margin-top: 10px;
    width: 100%;
    justify-content: flex-start;
    gap: 15px;
    flex: 0 0 40%;
  }
  .logo-nav{
    flex: 0 0 60%;
    overflow: hidden;
  }
}
</style>
