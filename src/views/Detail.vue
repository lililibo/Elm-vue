<template>
  <div class="detail">
    <!--头部-->
    <div class="header">
      <div class="header_t">
        <a>
          <i @click="tome" class="iconfont icon-fanhui"></i>
        </a>
        <img
          :src="'//elm.cangdu.org/img/'+goodsdata.image_path"
        >
      </div>
      <div class="header_b">
        <div class="header_b1">
          {{setname}}
          <i class="iconfont icon-sanjiaoright"></i>
        </div>
        <div class="header_b2">
          <span>评价5.0</span>
          <span>月售40单</span>
          <span>蜂鸟快送</span>
          <span>约40分钟</span>
        </div>
        <div class="header_b3">
          <div class="header_b31">
            <span>满减</span>
            <span>满10减5，满25减8，满40减15</span>
          </div>
          <div class="header_b32">
            <span>
              4个优惠
              <i class="iconfont icon-xiajiantou"></i>
            </span>
          </div>
        </div>
        <div class="header_b4">公告：欢迎光临，用餐高峰期请提前下单，谢谢。</div>
      </div>
    </div>
    <!--导航-->
    <div class="banner">
      <ul>
        <li>点餐</li>
        <li>评价</li>
        <li>商家</li>
      </ul>
    </div>
    <!--商品-->
    <div class="shangpin">
      <div class="shangpinl">
        <ul>
          <li class="shangpinl_active" v-for="litem in labtitle" :key="litem.id" @click="setindex(litem)">
            <a>
              <i class="iconfont icon-youhui"></i>
              {{litem.name}}
            </a>
          </li>
        </ul>
      </div>
      <div class="shangpinr">
        <ul>
          <li v-for="itemlist in goodslist" :key="itemlist.item_id">
            <van-card :key="1" tag="标签" :price="2.00" :desc="itemlist.description" :title='itemlist.name' :thumb="'//elm.cangdu.org/img/'+itemlist.image_path">
              <div slot="footer">
                <van-button size="mini">-</van-button>
                <van-button size="mini">+</van-button>
              </div>
            </van-card>
          </li>
        </ul>
      </div>
    </div>
    <!--底部-->
    <div class="footer">
      <van-goods-action class="bottom">
        <van-goods-action-mini-btn icon="cart-o" text="购物车" :info="5" @click="show = !show"/>
        <!-- <van-goods-action-mini-btn icon="cart-o" text="购物车"/> -->
        <van-goods-action-big-btn primary text="立即购买"/>
      </van-goods-action>
      <!-- 弹出层 -->
      <van-popup v-model="show" position="bottom">hello</van-popup>
      <!-- <div class="footerl">
        <i class="iconfont icon-gouwuchekong"></i>
        <div>
          <span>未选购商品</span>
          <br>
          <span>另需配送费3.5元</span>
        </div>
      </div>
      <div class="footerr">￥20起送</div>-->
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
			show: false,
			//商家名称
			uid: 1,
      sid: "",
      labtitle: {},
      goodsdata: {},
      goodslist:{}
    }
  },
  computed: {
    setname() {
      return this.goodsdata.name;
    },
    newgoods(){
      return this.goodslist;
    }
  },
  methods: {
    //编程式导航回首页
    tome() {
      this.$router.go(-1);
    },
    setindex(eltem){
      this.goodslist=eltem.foods
      console.log(this.goodslist)
    },
    undataid() {
      this.uid = this.$router.history.current.params.id;
    },
    getshopdata() {
      let url =
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.uid;
      Axios.get(url, {
        query: {
          restaurant_id: this.uid
        }
      }).then(res => {
        this.labtitle = res.data;
        if(this.goodslist=res.data[1].foods){
          this.goodslist=res.data[1].foods
        }

        console.log(1,res.data)
      });
    },
    newshopdata() {
      let url = "//elm.cangdu.org/shopping/restaurant/" + this.uid;
      Axios.get(url, {
        query: {
          restaurant_id: this.uid
        }
      }).then(res => {
        console.log(res.data)
        this.goodsdata = res.data;

      });
    }
  },
  activated() {
    this.undataid(), this.getshopdata(),this.newshopdata();
  }
};
</script>
<style>
body{
  height: 100%;
}
.van-card__footer {
  padding-top: 0.3rem;
}
.van-card {
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.detail{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.detail .header{
  width: 100%;
}
.detail .header_t {
  position: relative;
  height: 1rem;
  background: url("//fuss10.elemecdn.com/7/63/06a2d3a322b4da10ec394e5ee79cbpng.png?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/") ;
  background-size: 100%;
  margin-bottom: 0.26rem;
}
.detail .header_t a {
  position: absolute;
  top: 0;
  color: white;
  left: 0;
}
.detail .header_t img {
  width: 0.75rem;
  height: 0.75rem;
  box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0.42rem;
  left: 1.4rem;
}
.detail .header_b {
  padding: 0 0.38rem 0;
}
.detail .header_b1 {
  text-align: center;
  font-size: 0.2rem;
  font-weight: bold;
}
.detail .header_b2 {
  text-align: center;
  font-size: 0.1rem;
  color: #666666;
}
.detail .header_b3 {
  display: flex;
  font-size: 0.1rem;
  color: #666666;
  justify-content: space-between;
}
.detail .header_b31 span:nth-of-type(1) {
  display: inline-block;
  color: white;
  width: 0.26rem;
  height: 0.13rem;
  background: #f07373;
  text-align: center;
  line-height: 0.13rem;
}
.detail .banner {
  height: 0.4rem;
  width: 100%;
  padding: 0 0.48rem 0;
  margin-top: 0.14rem;
  margin-bottom: .1rem;
}
.detail .banner ul {
  display: flex;
  justify-content: space-between;
}
.detail .banner ul li {
  width: 20%;
  font-size: 0.12rem;
  color: #4c4c4c;
}
/*商品*/
.detail .shangpin {
  display: flex;
}
.detail .shangpinl {
  width: 0.77rem;
  background: #f8f8f8;
  margin-right: 10px;
}
.detail .shangpinl ul li {
  width: 0.77rem;
  height: 0.49rem;
  text-align: center;
  line-height: 0.49rem;
}
.detail .shangpinl_active {
  background: white;
}
.detail .shangpinr {
  flex: 1;
  padding-right: 0.15rem;
}
.detail .shangpinr ul li {
  display: flex;
  justify-content: space-between;
}
.detail .shangpinr ul li img {
  width: 0.95rem;
  height: 0.95rem;
}
/* .detail .shangpinr11 {
  color: #333333;
  margin-bottom: 0.2rem;
}
.detail .shangpinr12 {
  color: #ee806f;
  margin-bottom: 0.2rem;
}
.detail .shangpinr13 {
  color: #ee806f;
}
.detail .shangpinr ul li a button {
  width: 0.22rem;
  height: 0.22rem;
  border-radius: 50%;
  font-size: 0.2rem;
  color: white;
  background: #2395ff;
} */
/*底部*/
/* .detail .footer {
  height: 0.48rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #505052;
  padding-left: 0.12rem;
  position: fixed;
  bottom: 0;
  left: 0;
}
.icon-gouwuchekong {
  display: inline-block;
  text-align: center;
  line-height: 0.3rem;
  width: 0.4rem;
  height: 0.4rem;
  color: #999999;
  box-sizing: border-box;
  border: 0.05rem solid #444444;
  border-radius: 50%;
}
.detail .footerl {
  display: flex;
  width: 1.5rem;
  justify-content: space-between;
}
.detail .footerl div {
  color: #999999;
}
.detail .footerr {
  width: 1.05rem;
  background: #535356;
  color: white;
  text-align: center;
  line-height: 0.48rem;
  font-size: 0.13rem;
} */
</style>
