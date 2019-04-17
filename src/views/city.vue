<template>
  <div>
    <div class="cityhead fiex-head">
      <div class="citihead">
        <div class="cityhome">
          <svg
            @click="fn1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 33"
            class="city-13oid_0"
          >
            <path
              fill-rule="evenodd"
              d="M17.655 1.853L15.961.159.033 16.072 15.961 32l1.694-1.694L3.429 16.08 17.655 1.854z"
              class="path1"
            ></path>
          </svg>
        </div>
        <span>城市选择</span>
      </div>
    </div>
    <div class="list-city">
      <div class="cityhead city-pd">
        <div class="city-sec">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="city-1r2VH_0">
            <path
              fill-opacity="0.38"
              d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"
            ></path>
          </svg>
          <input type="text" class="city-input" placeholder="输入城市名或者拼音">
        </div>
      </div>
      <citylist></citylist>
    </div>
  </div>
</template>
<script>
import citylist from "../components/city/city.vue";
export default {
  components:{
    citylist,
  },
  methods: {
    fn1() {
      this.$router.go(-1);
    },
  },
}
</script>

<style scoped>
.cityhead {
  width: 100%;
  height: 44px;
  background: hsl(201, 100%, 50%);
}
.citihead {
  width: 100%;
  height: 45px;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  line-height: 45px;
  position: relative;
  overflow: hidden;
}
.cityhome {
  position: absolute;
  left: 15px;
}
.city-13oid_0 {
  color: #ffffff;
  height: 18px;
  line-height: 45px;
  margin-top: 13px;
  fill: #fff;
}
.city-sec {
  width: 325px;
  height: 30px;
  border-radius: 15px;
  background: #ffffff;
  margin: 0 auto;
}
.city-1r2VH_0 {
  height: 50%;
  margin-left: 10px;
  margin-top: 8px;
  float: left;
}
.city-pd {
  padding-top: 5px;
}
.city-input {
  width: 250px;
  height: 100%;
  border: 0;
  margin-left: 10px;
  outline: none;
  font-size: 12px;
}
.city-3Obwy_0 {
  background: #ffffff;
  overflow: hidden;
}
.list-city {
  width: 100%;
  overflow-y: auto;
  background: #fff;
}
</style>


