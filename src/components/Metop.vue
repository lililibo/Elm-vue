<template>
  <div class="metoptotal">
    <!-- 头部 -->
    <div id="header">
      <div class="adderss">
        <router-link to="/city">
          <i class="iconfont icon-dingwei"></i> <span :name="msg">{{msg}}</span>
          <i class="iconfont icon-xiajiantou"></i>
        </router-link>
      </div>
      <div class="search" :class="{ searchfixed: isFixedTabs}">
        <a href="#">
          <i class="iconfont icon-fdj"></i> 搜索饿了么商家、商品名称
        </a>
      </div>
    </div>
    <!-- 导航 -->
    <Banner :bannerList1="bannerList1" :bannerList2="bannerList2"></Banner>
    <!-- 推荐 -->
    <div class="groom">
      <div class="groom_l">
        <h2>品质套餐</h2>
        <p>搭配齐全吃得好</p>
        <a href="#">立即抢购 ></a>
      </div>
      <div class="groom_r">
        <img
          src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"
        >
      </div>
    </div>
    <!-- 会员 -->
    <div class="member">
      <a href="#">
        <div class="member_l">
          <i class="iconfont icon-huangguan"></i>
          <span>超级会员 .</span>
          <span>每月领20元红包</span>
        </div>
        <div class="member_r">
          <span>立即开通 ></span>
        </div>
      </a>
    </div>
    <!-- 轮播-->
    <Carousel></Carousel>
    <!-- 商家列表 -->
    <div class="list">
      <div class="list_t">
        <span></span>&nbsp;&nbsp;&nbsp;&nbsp;推荐商家&nbsp;&nbsp;&nbsp;&nbsp;
        <span></span>
      </div>
      <!-- 未登录 -->
      <div v-if="username==''">
        <div class="list_c">
          <ul>
            <li>
              <a href="#" class="list_c_active">
                综合排序
                <i class="iconfont icon-xiajiantou"></i>
              </a>
            </li>
            <li>
              <a href="#">距离最近</a>
            </li>
            <li>
              <a href="#">品质联盟</a>
            </li>
            <li>
              <a href="#">
                筛选
                <i class="iconfont icon-loudou"></i>
              </a>
            </li>
          </ul>
        </div>
        <section class="lblist_b">
          <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png">
          <p>没有结果</p>
          <h3>登陆后查看更多商家</h3>
          <router-link to="/login" class="login">立即登陆</router-link>
        </section>
      </div>

      <!-- 已登录 -->
      <Shoplist v-else></Shoplist>

    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Banner from "./Banner";
import axios from "axios";
import Shoplist from "./Shoplist";
export default {
  data() {
    return {
      bannerList1: [],
      bannerList2: [],
      isFixedTabs: false,
      username: ""
    };
  },
  components: {
    Carousel,
    Banner,
    Shoplist
  },
  computed: {
    msg(){
      return this.$store.state.thiscity
    }
  },
  methods: {
    //得到导航的列表
    getBannerList() {
      axios.get("https://elm.cangdu.org/v2/index_entry").then(res => {
        let data = res.data;
        for (var i = 0; i < 10; i++) {
          this.bannerList1.push(data[i]);
        }
        for (var j = 10; j < data.length; j++) {
          this.bannerList2.push(data[j]);
        }
      });
    },
    //得到localStorage中的username
    gitUsername() {
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
              } else if (res.data.code == -1) {
                //console.log(res.data.msg);
                _this.username = "";
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
          this.username = "";
        }
      }
    },
    //判断滚动条的距离让搜索固定在顶部
    onScoll () {
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop >= 49) {
        this.isFixedTabs = true
      } else {
        this.isFixedTabs = false
      }
    }
  },
  activated() {
    this.gitUsername()
    window.addEventListener('scroll', this.onScoll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.onScoll)
  },
  created() {
    this.getBannerList()
  }
};
</script>
<style>
/* 头部 */
.iconfont {
  font-size: 0.16rem !important;
}
.searchfixed{
  position: fixed;
  top: 0;
}
.metoptotal {
  background: white;
}
#header {
  height: 0.96rem;
  box-sizing: border-box;
  background: #00a7ff;
  border-bottom: 1px solid #80cdff;
}
.adderss {
  padding: 0.15rem 0.14rem 0 0.14rem;
}
.adderss a {
  font-weight: 700;
  font-size: 0.16rem;
  color: white;
}
.search{
  padding: 0.1rem 0.14rem 0.1rem 0.14rem;
  background: #00a7ff;
  z-index: 100;
}
.search a{
  display: block;
  width: 3.47rem;
  height: 0.37rem;
  line-height: 0.35rem;
  border-bottom: 1px solid #80c5ff;
  box-sizing: border-box;
  background: white;
  text-align: center;
}
.search a {
  color: #999999;
  font-size: 0.14rem;
}
/* 推荐 */
.groom {
  display: flex;
  justify-content: space-between;
  width: 3.55rem;
  height: 1.1rem;
  margin: 0.05rem 0.1rem 0.03rem;
  background: #f9f9f9;
  box-sizing: border-box;
  padding: 0.14rem 0.19rem 0 0.16rem;
}
.groom_l h2 {
  font-size: 0.16rem;
  color: #333333;
  font-weight: bold;
}
.groom_l p {
  color: #777777;
}
.groom_l a {
  font-size: 0.11rem;
  color: #af8260;
  font-weight: bold;
}
.groom_r img {
  width: 1.33rem;
  height: 0.78rem;
}
/* 会员 */
.member a {
  display: flex;
  justify-content: space-between;
  width: 3.55rem;
  height: 0.4rem;
  margin: 0.05rem 0.1rem 0.03rem;
  background: #feeec2;
  box-sizing: border-box;
  padding: 0.09rem 0.1rem 0 0.16rem;
}
.member_l span:nth-of-type(1) {
  font-weight: bold;
  font-size: 0.13rem;
  color: #644f1b;
}
.icon-huangguan {
  color: #d9b365;
}
/* 商家列表 */
.list {
  margin-bottom: 0.52rem;
}
.list_t {
  height: 0.36rem;
  line-height: 0.36rem;
  text-align: center;
  color: #000000;
  font-size: 0.15rem;
  margin-bottom: 0.1rem;
}
.list_t span {
  display: inline-block;
  width: 0.21rem;
  height: 0.01rem;
  margin-bottom: 0.04rem;
  background: #999999;
}
.list_c ul {
  display: flex;
  justify-content: space-around;
  font-size: 0.14rem;
}
.list_c_active {
  font-weight: bold;
}
</style>
