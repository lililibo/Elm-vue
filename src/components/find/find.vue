<template>
  <div class="heads">
    <div class="list-main">
      <div class="list-left">
        <div class="listmain-left">
          <div class="listmain-box">
            <span class="font-h redcolo">金币商城</span>
            <br>
            <span class="font-txt">0元好物在这里</span>
          </div>
        </div>
        <div class="listmain-right">
          <img
            loading
            class="icon"
            src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"
          >
        </div>
      </div>
      <div class="list-right">
        <div class="list-conten listcon-top">
          <div class="listcon-main">
            <div class="listcon-left">
              <span class="font-h bullcolo">推荐有奖</span>
              <br>
              <span class="font-txt">10元现金拿不停</span>
            </div>
            <img
              class="img-list"
              src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/"
            >
          </div>
        </div>
        <div class="list-conten listconbottm">
          <div class="listcon-main">
            <div class="listcon-left">
              <span class="font-h relocolo">周边优惠</span>
              <br>
              <span class="font-txt">领取口碑好券</span>
            </div>
            <img
              class="img-list"
              src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
window.onresize = function() {
  document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 3.75 + "px";
};
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + "px";

export default {
};
</script>

<style scoped>
.heads{
    width: 100%;
    height: 100%;
    background: #f6f6f6;
    display: flex;
    flex-flow:column;
    flex-shrink:1;
}
.list-main {
  width: 100%;
  height: 160px;
  background: #ffffff;
  display: flex;
}
.list-left {
  width: 50%;
  height: 100%;
  border-right: 2px solid #ededed;
  float: left;
  border-bottom: 2px solid #ededed;
  box-sizing: border-box;
}
.list-right {
  width: 50%;
  height: 100%;
  border-bottom: 2px solid #ededed;
  float: left;
  box-sizing: border-box;
}
.list-conten {
  width: 100%;
  height: 50%;
}
.listmain-left {
  width: 50%;
  height: 100%;
  float: left;
}
.listmain-box {
  padding: 25px 0 0 15px;
}
.font-h {
  font-size: 16px;
  line-height: 25px;
  white-space: nowrap;
}
.redcolo {
  color: #ff9900;
}
.bullcolo {
  color: rgb(27, 169, 225);
}
.relocolo {
  color: rgb(237, 102, 96);
}
.font-txt {
  font-size: 10px;
  white-space: nowrap;
  color: #999;
}
.listmain-right {
  width: 50%;
  height: 100%;
  float: left;
  position: relative;
}
.listmain-right img {
  position: absolute;
  width: 80%;
  bottom: 0;
  margin-bottom: 5px;
}
.listcon-top {
  border-bottom: 2px solid #ededed;
}
.listcon-main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 18px 18px 0 12px;
}
.img-list {
  display: block;
  width: 45px;
  height: 45px;
  float: right;
}
.listcon-left {
  float: left;
}
.Flashgifts {
  width: 100%;
}
</style>
