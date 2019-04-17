<template>
  <div class="swiper-container billboards swiper-container-banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide banner">
        <ul>
          <li
          v-for="banner1 in bannerList1"
          :key="banner1.id">
            <a href="#">
              <img
                :src="'https://fuss10.elemecdn.com' + banner1.image_url"
              >
              {{ banner1.title }}
            </a>
          </li>
        </ul>
      </div>
      <div class="swiper-slide banner">
        <ul>
          <li
          v-for="banner2 in bannerList2"
          :key="banner2.id">
            <a href="#">
              <img
                :src="'https://fuss10.elemecdn.com' + banner2.image_url"
              >
              {{ banner2.title }}
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
.banner{
	height: 1.68rem;
}
.banner ul{
	margin-bottom: .1rem;
}
.banner ul li{
	float: left;
	margin-top: .02rem;
	width: 20%;
	height: .75rem;
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
