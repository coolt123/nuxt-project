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
        <NuxtLink to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"/></path></svg></NuxtLink>
        <NuxtLink to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"/></svg></NuxtLink>
        </client-only>
      </div>

    </nav>
  </header>
</template>
<script setup>
import Usericon from './Usericon.vue';
</script>
<style scoped>
header {
  color: white;
  padding: 10px;
  text-align: center;
  height: 40px;
}

nav {
  display: flex;
  justify-content: space-between; /* Để 2 phần tách xa nhau */
  align-items: center; /* Căn giữa theo chiều dọc */
  padding: 0 10%; /* Khoảng cách từ lề */
}

a {
  text-decoration: none;
  color: white;
  font-size: 18px;
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
