<template>
    <a-carousel autoplay effect="scrollx"  >
      <div><img src="/public/image/image1.jpg" alt="Banner 1" class="carousel-img" /></div>
      <div><img src="/public/image/image1.jpg" alt="Banner 2" class="carousel-img" /></div>
      <div><img src="/public/image/slide1.jpg" alt="Banner 3" class="carousel-img" /></div>
      <div><img src="/public/image/image2.jpg" alt="Banner 4" class="carousel-img" /></div>
    </a-carousel>
  </template>
  
  <style scoped>
  :deep(.slick-slide) {
    text-align: center;
    height: auto; /* Cho phép hình tự co chiều cao theo tỷ lệ */
    background: none;
    overflow: hidden;
    margin-left: 0;
  }
  
  .carousel-img {
    width: 100%;
    height: 420px;
    object-fit: cover; /* Hiển thị ảnh đẹp hơn, không bị méo */
    display: block;
  }
  </style>
  