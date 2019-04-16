<template>
    <div class="swiper-container billboards">
      <div class="swiper-wrapper">
        <div class="swiper-slide Carousel">
          <img src="https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" alt>
        </div>
        <div class="swiper-slide Carousel">
          <img src="https://fuss10.elemecdn.com/2/f6/36e52bca0d6db458e9855b7fc5813jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" alt>
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data () {
    return {
      swiper: null
    }
  },
  updated () {
    if (!this.swiper) {
      this.swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
}
</script>
<style>
.Carousel {
  width: 3.55rem;
  height: 0.9rem;
  margin: 0.05rem 0.1rem 0.08rem;
}
.Carousel img {
  width: 100%;
  height: 100%;
}
</style>
