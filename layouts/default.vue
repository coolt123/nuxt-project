<script setup lang="ts">
import Header from "~/components/Header.vue";
import carousel from "~/components/carousel.vue";
import floatbyuttom from "~/components/floatbyuttom.vue";
</script>

<template>
  <div class="layout">
    <header>
      <Header />
    </header>

    <main>
     
      <slot />
      <a-back-top :visibility-height="0" />
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
  background: rgb(253, 253, 253);
  color: black;
  padding: 10px 0px 0px 0px;
  text-align: center;
  height: 50px;
  width: 100%;
}

/* Main chiếm phần còn lại của trang */
main {
  flex: 1;
  padding: 0;
  margin-top: 10px;
  width: 100vw; 
}

/* Footer luôn nằm dưới cùng */
footer {
  background: #222;
  color: white;
  text-align: center;
  padding: 10px;
}
:global(html, body) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:global(*) {
  box-sizing: inherit;
}
</style>
