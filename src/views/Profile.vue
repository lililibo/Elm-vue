<template>
  <div class="profile-1vcJW">
    <!-- 头部 -->
    <!-- 未登陆 -->
    <router-link to="/login" v-if="username==''">
      <div class="profile-3g0uv">
        <div class="index-18Ili">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==" />
        </div>
        <div class="profile-xfCcC">
          <p class="profile-1_mtk">
            <span>登陆/注册</span>
          </p>
          <p class="profile-1UP72">
            <i class="iconfont icon-shouji"></i>
            <span>登陆后享受更多特权</span>
          </p>
        </div>
        <i class="profile-2XuMq iconfont icon-right"></i>
      </div>
    </router-link>
    <!-- 登陆了 -->
    <router-link to="/profile/info" v-else>
      <div class="profile-3g0uv">
        <div class="index-18Ili">
          <img :src=avator />
        </div>
        <div class="profile-xfCcC">
          <p class="profile-1_mtk">
            <span>{{username}}</span>
          </p>
          <p class="profile-1UP72">
            <i class="iconfont icon-shouji"></i>
            <span>{{phone}}</span>
          </p>
        </div>
        <i class="profile-2XuMq iconfont icon-right"></i>
      </div>
    </router-link>
    <!-- 红包金币 -->
    <div class="index-1G7HV">
      <a @click="tobenefit" class="index-1ryAh">
        <p>
          <span class="index-2FmrF" style="color: rgb(255, 95, 62);">0</span>
          <span class="index-2V-Hh" style="color: rgb(255, 95, 62);">个</span>
        </p>
        <p class="index-3S6cZ">红包</p>
      </a>
      <a href="https://activity.m.duiba.com.cn/chome/index#/chome/index" class="index-1ryAh">
        <p>
          <span class="index-2FmrF" style="color: rgb(106, 194, 11);">0</span>
          <span class="index-2V-Hh" style="color: rgb(106, 194, 11);">个</span>
        </p>
        <p class="index-3S6cZ">金币</p>
      </a>
    </div>
    <!-- 我的地址 -->
    <section class="profile-1reTe">
      <a @click="toadress" class="index-2MEEn">
        <i class="iconfont icon-dizhi" style="color:rgb(74, 165, 240);"></i>
        <a class="index-yydpu">
          我的地址
          <i class="iconfont icon-right"></i>
        </a>
      </a>
    </section>
    <!-- 金币商城 -->
    <section class="profile-1reTe">
      <a href="https://activity.m.duiba.com.cn/chome/index#/chome/index" class="index-2MEEn">
        <i class="iconfont icon-shangcheng" style="color:rgb(148, 217, 74)"></i>
        <div class="index-yydpu">
          金币商城
          <i class="iconfont icon-right"></i>
        </div>
      </a>
      <a class="index-2MEEn">
        <i class="iconfont icon-liwu" style="color:rgb(252, 123, 83)"></i>
        <div class="index-yydpu" @click="commend">
          分享拿10元现金
          <i class="iconfont icon-right"></i>
        </div>
      </a>
    </section>
    <!-- 我的客服 -->
    <section class="profile-1reTe">
      <a class="index-2MEEn">
        <i class="iconfont icon-erji" style="color:rgb(74, 165, 240)"></i>
        <div class="index-yydpu" @click="service">
          我的客服
          <i class="iconfont icon-right"></i>
        </div>
      </a>
      <router-link to="/service/dowlond" class="index-2MEEn">
        <i class="iconfont icon-eliaomo" style="color:rgb(74, 165, 240)"></i>
        <div class="index-yydpu">
          下载饿了么APP
          <i class="iconfont icon-right"></i>
        </div>
      </router-link>
      <router-link to="/service/agreement" class="index-2MEEn">
        <i class="iconfont icon-guize" style="color:rgb(74, 165, 240)"></i>
        <div class="index-yydpu">
          规则中心
          <i class="iconfont icon-right"></i>
        </div>
      </router-link>
    </section>
    <!-- 隐私政策 -->
    <div class="profile-2dyk_">
      <a
        href="//h5.ele.me/service/agreement/#HEAEDER_SHOW=1&initTitle=%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96&key=ruleQue50"
      >隐私政策</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      phone: "",
      avator: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
    };
  },
  methods: {
    isLogin: function() {
      if (localStorage) {
        if (localStorage.getItem("username")) {
          var username = localStorage.getItem("username");
          var _this = this;
          //对username进行验证
          axios
            .get("http://localhost:3000/users/usernameyz", {
              params: {
                username: username
              }
            })
            .then(function(res) {
              //console.log(res.data);
              if (res.data.code == 0) {
                _this.username = username;
                var phone = localStorage.getItem("phone");
                //隐藏电话号码的中间4位
                var myphone = phone.substr(3, 4);
                var lphone = phone.replace(myphone, "****");
                _this.phone = lphone;
              } else if (res.data.code == -1) {
                //console.log(res.data.msg);
                _this.username = "";
                _this.phone = "";
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
          this.username = "";
          this.phone = "";
        }
      }
    },
    //点击我的优惠
    tobenefit () {
      this.isLogin();
      if (this.username == "") {
        this.$router.push("/login");
      } else {
        this.$router.push("/profile/benefit");
      }
    },
    //点击我的地址
    toadress () {
      this.isLogin();
      if (this.username == "") {
        this.$router.push("/login");
      } else {
        this.$router.push("/profile/address");
      }
    },
    //点击分享拿10元现金
    commend: function() {
      this.isLogin();
      if (this.username == "") {
        this.$router.push("/login");
      } else {
        this.$router.push("/commend");
      }
    },
    //点击我的客服
    service: function() {
      this.isLogin();
      if (this.username == "") {
        this.$router.push("/login");
      } else {
        this.$router.push("/mservice");
      }
    },
    //检查头像用户是否修改过
    getAvator :function(){
      if(localStorage){
        if(localStorage.getItem("avator")){
          this.avator=localStorage.getItem("avator")
        }
      }
    }
  },
  activated() {
    this.isLogin();
    this.getAvator();
  }
  // mounted() {
  //   this.isLogin();
  // },
};
</script>


<style>
/* 头部 */
body {
  background-color: #f5f5f5;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.profile-3g0uv {
  height: 1.1rem;
  display: flex;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: 6.666667vw 4vw;
  align-items: center;
}
.profile-3g0uv .index-18Ili {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
}
.profile-3g0uv .index-18Ili img {
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  /* background-position: 0px 2.4rem;
  background-size: 0.6rem;
  background: url(//shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png); */
}
.profile-3g0uv .profile-xfCcC {
  overflow: hidden;
  margin-left: 4.8vw;
  flex-grow: 1;
}
.profile-3g0uv .profile-xfCcC p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.profile-3g0uv .profile-xfCcC .profile-1_mtk {
  font-size: 0.2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1.065vw;
  display: flex;
  align-items: center;
}
.profile-3g0uv .profile-xfCcC .profile-1UP72 {
  font-size: 0.12rem;
  color: #fff;
  display: flex;
  align-items: center;
}
.profile-1UP72 .icon-shouji {
  font-size: 0.12rem;
}
.profile-3g0uv .profile-2XuMq {
  color: #fff;
  font-size: 0.12rem;
}
/* 红包金币 */
.index-1G7HV {
  width: 100%;
  height: 0.84rem;
  display: table;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}
.index-1G7HV .index-1ryAh {
  display: table-cell;
  width: 33.333%;
  vertical-align: middle;
  text-align: center;
}
.index-1G7HV > a:nth-child(1) {
  border-right: 1px solid #ddd;
  display: table-cell;
}
.index-1G7HV .index-2FmrF {
  font-size: 0.22rem;
  line-height: 6.933333vw;
  font-weight: 700;
}
.index-1G7HV .index-3S6cZ {
  margin-top: 1.333333vw;
  font-size: 0.12rem;
  line-height: 3.733333vw;
  color: #666;
  font-weight: 700;
}
/* 我的地址 */
.profile-1reTe {
  margin-top: 2.666667vw;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-size: 0.05rem;
  line-height: 0.45rem;
  background: #fff;
}
.profile-1reTe .index-2MEEn {
  font-size: 0.16rem;
  color: #333;
  display: flex;
  align-items: center;
  padding-left: 0.12rem;
}
.profile-1reTe .index-2MEEn .iconfont {
  font-size: 0.2rem;
  margin-right: 2.667vw;
}
.profile-1reTe .index-2MEEn .index-yydpu {
  margin-right: 0.05rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.index-2MEEn:not(:last-child) .index-yydpu {
  border-bottom: 1px solid #eee;
}
.profile-1reTe .index-2MEEn .icon-right {
  font-size: 0.12rem;
  margin-right: 1vw;
  color: #bbb;
}
/* 隐私政策 */
.profile-2dyk_ {
  text-align: center;
  margin: 0.613333rem auto;
  margin: 6.133333vw auto;
  color: #4da6f0;
  font-size: 0.16rem;
}
.profile-2dyk_ > a {
  outline: none;
  color: inherit;
}
</style>

