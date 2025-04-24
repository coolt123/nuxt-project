<template>
    <a-carousel arrows>
      <template #prevArrow>
        <div class="custom-arrow prev-arrow">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-arrow next-arrow">
          <right-circle-outlined />
        </div>
      </template>
      <div v-for="(img, index) in bannerList" :key="index">
        <img
          loading="lazy"
          :src="`/image/${img}`"
          :alt="`Banner ${index + 1}`"
          class="carousel-image"
        />
      </div>
    </a-carousel>
  </template>
  
  <script lang="ts" setup>
  import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
  
  const bannerList = ["banner1.png", "banner2.webp"];
  </script>
  
  <style scoped>
  :deep(.custom-arrow) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    font-size: 32px;
    color: #be2c2c;
    background-color: rgba(31, 45, 61, 0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    opacity: 0.6;
    z-index: 10;
  }
  
  :deep(.prev-arrow) {
    left: 10px;
  }
  
  :deep(.next-arrow) {
    right: 10px;
  }
  
  :deep(.custom-arrow:hover) {
    color: #ff0808;
    background-color: rgba(31, 45, 61, 0.25);
    opacity: 1;
  }
  
  :deep(.slick-slide) {
    text-align: center;
    overflow: hidden;
    padding: 0;
  }
  
  .carousel-image {
    width: 100%;
    height: 420px;
    object-fit: contain;
  }
  :deep(.slick-arrow::before) {
  display: none !important;
}
  </style>
  