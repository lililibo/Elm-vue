<template>
  <div>
    <van-nav-bar title="下载" left-text="返回" left-arrow @click-left='fn1'>
    </van-nav-bar>
    <img
      src="http://img4.imgtn.bdimg.com/it/u=1002936186,4245057668&fm=26&gp=0.jpg"
      class="centimg"
    >
    <van-button round type="danger" class="btnset">下载</van-button>
  </div>
</template>
<script>
export default {
    methods: {
    fn1() {
      this.$router.go(-1);
    }
}
}
</script>

<style scoped>
.centimg {
  position: absolute;
  top: 150px;
  width: 200px;
  height: 200px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.btnset {
  position: absolute;
  top: 400px;
  left: 0;
  right: 0;
  width: 100px;
  height: 40px;
  background: #016be1;
  border: 0;
  margin: 0 auto;
}
</style>
