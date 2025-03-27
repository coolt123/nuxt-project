<!-- Thực hiện xây dựng source base trên Nuxt3 dành cho trang quản trị Admin
  + Kiến trúc source code cơ bản theo Nuxt, có tích hợp Ant Design Vue
  + Lên layout dành cho page Login
  + Lên layout dành cho page Register
  + Lên layout default dùng chung cho các page quản trị: components bao gồm header, footer, menu(sidebar), main area -->
  <template>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      
    </div>
  </template>
  <script setup>
  
  </script>   
  <style scoped>
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.4s;
  }
  .layout-enter-from,
  .layout-leave-to {
    filter: grayscale(1);
  }
  </style>
