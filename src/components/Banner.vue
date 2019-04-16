<template>
  <div class="swiper-container billboards swiper-container-banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide banner">
        <ul>
          <li
          v-for="banner1 in bannerList1"
          :key="banner1.goodId">
            <a href="#">
              <img
                :src="banner1.img"
              >
              {{ banner1.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="swiper-slide banner">
        <ul>
          <li
          v-for="banner2 in bannerList2"
          :key="banner2.goodId">
            <a href="#">
              <img
                :src="banner2.img"
              >
              {{ banner2.name }}
            </a>
          </li>
        </ul>
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
  props: {
    bannerList1: {
      type: Array
    },
    bannerList2: {
      type: Array
    }
  },
  data () {
    return {
      swiper: null
    }
  },
  updated () {
    if (!this.swiper) {
      this.swiper = new Swiper('.swiper-container-banner', {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
}
</script>

<style>
/* 导航 */
.banner {
  height: 1.68rem;
  background: white;
}
.banner ul {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.1rem;
  justify-content: space-around;
}
.banner ul li {
  margin-top: 0.02rem;
  width: 20%;
  height: 0.75rem;
}
.banner img {
  width: 0.5rem;
  height: 0.5rem;
}
.banner a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.banner_b {
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner_b span {
  display: block;
  margin-right: 0.05rem;
  width: 0.09rem;
  height: 0.02rem;
  background: #cccccc;
}
.banner_b_active {
  background: #ccedff !important;
}
</style>
