<template>
  <header>
    <nav>
      <div class="mid">
        <NuxtLink to="/"> Home</NuxtLink>
        <NuxtLink to="/books"> Shop</NuxtLink>
        <NuxtLink to="/"> About</NuxtLink>
        <NuxtLink to="/"> Contact</NuxtLink>
      </div>
      <div class="bot">
        <client-only>
        <NuxtLink to="/"> <Usericon/> </NuxtLink>
        <NuxtLink to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10.5 13.5l-7.5 7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"/></path></g></svg></NuxtLink>
        <NuxtLink to="/usercheck"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"/></path></svg></NuxtLink>
        <NuxtLink to="/cart"> <shoppingcart /></NuxtLink>
        </client-only>
      </div>

    </nav>
    
  </header>
</template>
<script setup>
import Usericon from './Usericon.vue';
import shoppingcart from './shoppingcart.vue';
import usercheck from '../pages/usercheck.vue';
</script>
<style scoped>
header {
  position: fixed;        /* Giữ cố định */
  top: 0;                 /* Dính vào đầu trang */
  left: 0;
  right: 0;
  z-index: 1000;          /* Ưu tiên hiển thị trên cùng */
  background: white;      /* Nên có màu nền để tránh bị trong suốt */
  padding: 10px 0;
  height: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Tuỳ chọn: tạo bóng */
}


nav {
  display: flex;
  justify-content: space-between; /* Để 2 phần tách xa nhau */
  align-items: center; /* Căn giữa theo chiều dọc */
  padding: 0 10%; /* Khoảng cách từ lề */
}

a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 23px;
  margin: 0 10px; /* Tạo khoảng cách giữa các link */
}

a:hover {
  text-decoration: underline;
}

.mid,
.bot {
  display: flex;
  gap: 20px; /* Khoảng cách giữa các link */
}

.bot {
  margin-left: 30%; /* Tạo khoảng cách giữa mid và bot */
}
.mid{
  margin-left: 20%;
}

</style>
