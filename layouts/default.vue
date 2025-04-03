<script setup lang="ts">
import Header from '~/components/Header.vue';
</script>

<template>
  <div class="layout">
    <header>
      <Header />
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <p>© 2025 - Footer chung</p>
    </footer>
  </div>
</template>

<style scoped>
/* Bố cục chung */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Chiều cao tối thiểu 100% viewport */
}

/* Header */
header {
  background: black;
  color: black;
  padding:10px 0px 0px 0px;
  text-align: center;
  height: 50px;
}

/* Main chiếm phần còn lại của trang */
main {
  flex: 1; /* Tự động mở rộng để đẩy footer xuống */
  padding: 20px;
}

/* Footer luôn nằm dưới cùng */
footer {
  background: #222;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
