<template>
  <div>
    <div class="list_c">
      <ul>
        <li>
          <a @click="zonghe" :class="{ list_c_active : current=='zonghe'}">
            综合排序
            <i class="iconfont icon-xiajiantou"></i>
          </a>
        </li>
        <li>
          <a @click="juli" :class="{ list_c_active : current=='juli'}">距离最近</a>
        </li>
        <li>
          <a @click="pingfen" :class="{ list_c_active : current=='pingfen'}">品质联盟</a>
        </li>
        <li>
          <a @click="shaixuan" :class="{ list_c_active : current=='shaixuan'}">
            筛选
            <i class="iconfont icon-loudou"></i>
          </a>
        </li>
      </ul>
    </div>
    <ul>
      <li v-for="item in shopList" :key="item.id">
        <router-link tag="div" :to="{ name: 'detail',params: { id: item.id } }" class="list_b">
          <div class="seller_t">
            <img :src="'//elm.cangdu.org/img/' + item.image_path">
            <div class="seller_t_r">
              <div class="seller_t_r1">
                <h3>
                  <span>品牌</span>
                  <span>{{item.name}}</span>
                </h3>
                <span>口···</span>
              </div>
              <div class="seller_t_r2">
                <span>☆ ☆ ☆ ☆ ☆</span>
                <span>{{item.rating}}</span>
                <span>月售{{item.recent_order_num}}单</span>
              </div>
              <div class="seller_t_r3">
                <div>
                  <span>{{item.float_minimum_order_amount}} 起送 |</span>
                  <span>配送费约￥{{item.float_delivery_fee}}</span>
                </div>
                <div>
                  <span>{{item.distance}}|</span>
                  <span>{{item.order_lead_time}}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="seller_b">
            <div class="seller_b1">
              <span>{{item.category}}</span>
              <span>品质联盟</span>
            </div>
            <div class="seller_b2"></div>
            <div class="seller_b3">
              <div class="seller_b3l">
                <div>
                  <span>减</span> 满29减12，满49减25，满69减35，满99减42
                </div>
                <div>
                  <span>折</span> 特价商品0.99元起
                </div>
              </div>
              <div class="seller_b3r">
                5个活动
                <i class="iconfont icon-xiajiantou"></i>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <p class="loadMore" v-if="sw<pageNum">正在加载</p>
      <p class="loadMore" v-else>没有了，到底了</p>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      shopList: [],
      order_by: 4,
      current: "zonghe",
      sw: 1,
      pageNum: 7,
      pageSize: 8,
      total: 56
    };
  },
  computed: {
    //计算页数
    getPageNum: function() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  methods: {
    getShopList: function() {
      var _this = this;
      axios
        .get("https://elm.cangdu.org/shopping/restaurants", {
          params: {
            latitude: 22.547,
            longitude: 114.085947,
            offset: 0,
            limit: this.pageSize,
            order_by: this.order_by
          }
        })
        .then(function(res) {
          _this.shopList = res.data;
          //console.log(res.data);
        })
        .catch(function(err) {
          alert(err);
        });
    },
    juli: function() {
      this.current = "juli";
      this.order_by = 5;
      this.getShopList();
      this.getScroll();
    },
    pingfen: function() {
      this.current = "pingfen";
      this.order_by = 3;
      this.getShopList();
      this.getScroll();
    },
    zonghe: function() {
      this.current = "zonghe";
      this.order_by = 4;
      this.getShopList();
      this.getScroll();
    },
    shaixuan: function() {
      this.current = "shaixuan";
    },
    //滚动事件
    getScroll: function() {
      // 滚动事件
      var _this = this;
      window.onscroll = function() {
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        //变量windowHeight是可视区的高度
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        //滚动条到底部的条件
        if (scrollTop + windowHeight >= scrollHeight) {
          //写后台加载数据的函数
          if (_this.sw < _this.pageNum) {
            
            _this.pageSize = _this.pageSize + 8;
            _this.getShopList();
            _this.sw++;
          }
        }
      };
    }
  },
  mounted() {
    this.order_by = 4;
    this.getShopList();
    this.getScroll();
  }
};
</script>


<style>
/* 商家列表 */
.lblist_b {
  height: 3.15rem;
  background: white;
  text-align: center;
  margin-top: 0.4rem;
}
.lblist_b img {
  width: 2rem;
  height: 2rem;
}
.lblist_b p {
  font-size: 0.2rem;
  color: #6a6a6a;
}
.lblist_b h3 {
  margin-bottom: 0.15rem;
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
.list_b {
  height: 1.77rem;
  border-bottom: 1px solid #f8f8f8;
  box-sizing: border-box;
  padding: 0.15rem 0.11rem 0 0.1rem;
}
.seller_t {
  display: flex;
  height: 0.64rem;
}
.seller_t img {
  width: 0.64rem;
  height: 0.64rem;
  margin-right: 0.1rem;
}
.seller_t_r {
  flex: 1;
}
.seller_t_r1 {
  display: flex;
  justify-content: space-between;
}
.seller_t_r1 h3 {
  color: #333333;
  font-size: 0.14rem;
}
.seller_t_r1 h3 span:nth-of-type(1) {
  display: inline-block;
  width: 0.3rem;
  height: 0.17rem;
  line-height: 0.16rem;
  background: #ffe920;
  font-size: 0.1rem;
  color: #6f3f15;
  text-align: center;
}
.seller_t_r3 {
  display: flex;
  justify-content: space-between;
}
.seller_b {
  margin-left: 0.74rem;
}
.seller_b1 span:nth-of-type(1) {
  margin-right: 0.6rem;
}
.seller_b2 {
  height: 0.14rem;
}
.seller_b3 {
  display: flex;
  justify-content: space-between;
}
.seller_b3l {
  /*margin-right: .53rem;*/
  width: 1.79rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.seller_b3l div span {
  display: inline-block;
  width: 0.14rem;
  line-height: 0.14rem;
  text-align: center;
  height: 0.14rem;
  font-size: 0.1rem;
  color: #fff;
  background: #f07373;
}
.list_c ul {
  display: flex;
  justify-content: space-around;
  font-size: 0.14rem;
}
.list_c_active {
  font-weight: bold;
  color: black;
  font-size: 16px;
}
/* 加载更多 */
.loadMore {
  text-align: center;
  height: 30px;
  line-height: 30px;
}
</style>

