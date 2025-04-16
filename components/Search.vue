<template>
    <div class="search-wrapper">
      <a-input-search
        v-model:value="searchText"
        placeholder="Tìm kiếm..."
        enter-button
        allowClear
        @search="handleSearch"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const searchText = ref('');
  
  const emit = defineEmits<{
    (e: 'search', value: string): void;
  }>();
  
  const handleSearch = (value: string) => {
    emit('search', value.trim());
  };
  </script>
  
  <style scoped>
  .search-wrapper {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    flex-grow: 1;
  }
  

  
  @media (max-width: 600px) {
    .search-wrapper {
      padding: 0 8px;
     
    }
  }
  </style>
  