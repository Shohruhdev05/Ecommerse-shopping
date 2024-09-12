<template>
<div class="container mt-3">
  <div class="row">
    <div class="col-md-12">
      <swiper-container class="mySwiper" navigation="true">
        <swiper-slide><img src="../../images/ImageCarousel.jpg" height="536" width="1120"/></swiper-slide>
        <swiper-slide><img src="../../images/ImageCarousel.jpg" height="536" width="1120"/></swiper-slide>
        <swiper-slide><img src="../../images/ImageCarousel.jpg" height="536" width="1120"/></swiper-slide>
        <swiper-slide><img src="../../images/ImageCarousel.jpg" height="536" width="1120"/></swiper-slide>
        <swiper-slide><img src="../../images/ImageCarousel.jpg" height="536" width="1120"/></swiper-slide>
      </swiper-container>
    </div>
  </div>
</div>

</template>
<script setup>
</script>


<style scoped>

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 991px) {
  #carouselExampleIndicators{
    min-width: 768px;
  }
}
@media screen and (max-width: 767px) {
  #carouselExampleIndicators {
    min-width: 481px;
  }
}
@media screen and (max-width: 480px) {
 #carouselExampleIndicators{
   min-width: 376px;
 }
}
@media screen and (max-width: 375px) {
  #carouselExampleIndicators{
    min-width: 375px;
  }
}
</style>