<template>
  <div>
    <!-- 未登陆 -->
    <section class="nodatatipWrap NoDataTip-wrapper_1Gwf0tm" v-if="username==''">
      <img src="//fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png">
      <h3>登陆后查看外卖订单</h3>
      <router-link to="/login" class="login">立即登陆</router-link>
    </section>
    <!-- 已登陆 -->
    <div v-else>
      <section class="nodatatipWrap NoDataTip-wrapper_1Gwf0tm">
        <img src="//fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png">
        <h3>近三个月无外卖订单纪录</h3>
      </section>
      <section class="orderbody">
        <div class="orderbody-bottom"></div>
        <p class="limited" v-if="seeNormal" @click="seeMore">
          查看三个月前的外卖订单
          <i class="iconfont icon-arrow-down"></i>
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      seeNormal:true
    };
  },
  methods: {
    isLogin: function() {
      if (localStorage) {
        if (localStorage.getItem("username")) {
          var username = localStorage.getItem("username");
          this.username = username;
        }else{
          this.username ='';
          this.seeNormal=true;
        }
      }
    },
    //查看更多
    seeMore: function(){
      this.seeNormal=false;
    }
  },
  activated() {
    this.isLogin();
  }
};
</script>

<style>
body,
html {
  width: auto;
  height: auto;
  background-color: #f5f5f5;
}
.nodatatipWrap {
  margin-top: 1rem;
}
.login {
  padding: 2.666667vw;
  min-width: 32vw;
  border: none;
  border-radius: 0.533333vw;
  background-color: #56d176;
  color: #fff;
  text-align: center;
  font-size: 0.14rem;
}
.NoDataTip-wrapper_1Gwf0tm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.NoDataTip-wrapper_1Gwf0tm img {
  display: block;
  width: 2rem;
}
.NoDataTip-wrapper_1Gwf0tm h3 {
  margin: 0.125rem 0 0.1rem;
  color: #6a6a6a;
  font-weight: 400;
  font-size: 0.17rem;
}
.orderbody {
  padding: 2vw 0;
}
.orderbody .limited {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #999;
}
.orderbody .limited .icon-arrow-down {
  font-size: 0.01rem;
}
</style>

