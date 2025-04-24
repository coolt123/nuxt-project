<template>
  <div class="banner_main">
    <div class="banner_left">
      <a-carousel autoplay arrows>
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-outlined />
          </div>
        </template>

        <div v-for="(img, index) in imageList" :key="index">
          <img
            loading="lazy"
            :src="`/image/${img}`"
            :alt="`Banner ${index + 1}`"
            class="carousel-img"
          />
        </div>
      </a-carousel>
    </div>

    <div class="banner_right">
      <div v-for="(img, index) in bannerList" :key="index" class="right-img-wrapper">
        <img
          loading="lazy"
          :src="`/image/${img}`"
          :alt="`Banner Right ${index + 1}`"
        />
      </div>
    </div>
  </div>

  
</template>


<script setup lang="ts">
import { ref, onMounted } from "vue";
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';

const imageList = [
  "image3.webp",
  "image4.webp",
  "image5.webp",
  "image6.webp",
  "image7.webp",
];

const bannerList = ["banner1.png", "banner2.webp"];
</script>

<style scoped>
.banner_main {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  height: 320px;
}

/* Carousel bên trái */
.banner_left {
  flex: 2.7;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Carousel image */
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

/* Banner bên phải */
.banner_right {
  flex: 1.3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
}

/* Right image wrapper đảm bảo chia đều chiều cao */
.right-img-wrapper {
  flex: 1;
  height: calc(50% - 6px); /* Chia đôi chiều cao với gap 12px */
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.right-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

/* Responsive */
@media (max-width: 768px) {
  .banner_main {
    flex-direction: column;
    height: auto;
  }

  .banner_left {
    height: auto;
  }

  .carousel-img {
    height: 200px;
  }

  .banner_right {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .right-img-wrapper {
    height: 120px;
    flex: 1 1 calc(50% - 8px);
  }
}

:deep(.slick-slide) {
  text-align: center;
  overflow: hidden;
  padding: 0;
}
/* Ẩn mũi tên mặc định của slick */
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}

/* Tuỳ chỉnh mũi tên custom */
:deep(.custom-slick-arrow) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  font-size: 22px;
  color: #000000a9;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

:deep(.custom-slick-arrow:hover) {
  transform: translateY(-50%) scale(1.15);
  color: #000000;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}



</style>
