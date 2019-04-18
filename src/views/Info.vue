<template>
  <div>
    <div>
      <ul class="main-22cQX">
        <li class="main-3Idiu main-2OSrE">
          <b>头像</b>
          <span class="main-nwHdE">
            <input type="file" accept="image/jpeg, image/jpg, image/png" class="main-1mfZE">
            <div class="index-18Ili">
              <span></span>
            </div>
            <i class="iconfont icon-right"></i>
          </span>
        </li>
        <li class="main-3Idiu">
          <b>用户名</b>
          <span class="main-2cJz_">
            {{username}}
            <i class="iconfont icon-right"></i>
          </span>
        </li>
      </ul>
      <h2 class="main-1OkSR">账号绑定</h2>
      <ul class="main-22cQX">
        <li class="main-3Idiu">
          <span>
            <i class="iconfont icon-shouji"></i>
            <b>手机</b>
          </span>
          <span>
            <span class="main-2cJz_">{{phone}}</span>
            <i class="iconfont icon-right"></i>
          </span>
        </li>
      </ul>
      <h2 class="main-1OkSR">安全设置</h2>
      <ul class="main-22cQX">
        <li class="main-3Idiu">
          <span>登陆密码</span>
          <span>
            <span class="main-2cJz_" style="color:#0097ff;">修改</span>
            <i class="iconfont icon-right"></i>
          </span>
        </li>
      </ul>
      <button class="main-aGw6s" @click="logOut">退出登陆</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      phone: ""
    };
  },
  methods: {
    isLogin: function() {
      if (localStorage) {
        if (localStorage.getItem("username")) {
          var username = localStorage.getItem("username");
          this.username = username;
        }
        if (localStorage.getItem("phone")) {
          var phone = localStorage.getItem("phone");
          //隐藏电话号码的中间4位
          var myphone = phone.substr(3, 4);
          var lphone = phone.replace(myphone, "****");
          this.phone = lphone;
        }
      }
    },
    //退出登陆
    logOut: function() {
      localStorage.removeItem("username");
      localStorage.removeItem("phone");
      localStorage.removeItem("password");
      this.$router.push("/profile");
    }
  },
  activated() {
    this.isLogin();
  }
};
</script>


<style>
html,
body {
  background-color: #f5f5f5;
  color: #333;
}
.icon-right {
  color: #ddd;
}
.main-22cQX {
  background-color: #fff;
  width: 100%;
  font-size: 0.16rem;
  color: #333;
}
.main-2OSrE {
  position: relative;
}
.main-3Idiu {
  padding: 2.666667vw 3.733333vw;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-nwHdE {
  display: flex;
  align-items: center;
}
.main-1mfZE {
  display: block;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}
.index-18Ili {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
}
.index-18Ili > span {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: url(//shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png) 0px
    0px;
  background-size: 0.6rem;
}
.main-3Idiu:last-child {
  padding: 3.733333vw;
  border-top: 1px solid #eee;
}
.main-1OkSR {
  margin: 4.266667vw 0 1.866667vw 3.733333vw;
  font-size: 0.12rem;
  color: #999;
  font-weight: 400;
}
.main-3Idiu:last-child {
  padding: 3.733333vw;
  border-top: 1px solid #eee;
}
.main-2cJz_ {
  color: #666;
}
/* 登陆按钮 */
.main-aGw6s {
  display: block;
  width: 100%;
  text-align: center;
  padding: 3.733333vw 0;
  margin: 5.333333vw 0;
  color: #ff5339;
  border: 0;
  border-radius: 0.8vw;
  font-size: 0.16rem;
  font-weight: 700;
  background-color: #fff;
}
</style>