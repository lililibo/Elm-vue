<template>
    <div class="swiper-container billboards swiper-container-carousel">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://fuss10.elemecdn.com/2/f6/36e52bca0d6db458e9855b7fc5813jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
            alt
          >
        </div>
        <div class="swiper-slide">
          <img
            src="https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
            alt
          >
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      swiper: null
    };
  },
  mounted() {
      this.swiper = new Swiper('.swiper-container-carousel', {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })  
  }
  
};
</script>
<style>
.swiper-container-carousel {
  width: 100%;
  height: 1.03rem;
}
.swiper-container-carousel .swiper-wrapper {
  height: 100%;
  width: 100%;
}
.swiper-container-carousel .swiper-slide {
  height: 100%;
  width: 100%;
}
.swiper-container-carousel .swiper-slide img {
  width: 3.55rem;
  height: 0.9rem;
  margin: 0.05rem 0.1rem 0.08rem;
}
</style>
