<template>
  <div class="main">
    <div>
      <div class="activity-header">
        <span class="line left"></span>
        限时好礼
        <span class="line right"></span>
      </div>
    </div>
    <p class="twohead">金币换好礼</p>
    <ul class="list-goods">
      <li class="goods-box">
          <a href="#" class="good-box">
          <span class="discount">限时优惠</span>
          <img class="goods-img" src="https://fuss10.elemecdn.com/7/ec/adf8ae0fd52a0eb56f4332fb61ac2jpeg.jpeg?imageMogr/format/webp/">
          <p class="msg-txt">3元品质联盟红包</p>
          <span class="msg-txt txtcolored">90金币</span><span class="price">￥3</span>
          </a>
      </li>
      <li class="goods-box">
          <a href="#" class="good-box">
          <span class="discount">特价换购</span>
          <img class="goods-img" src="https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/">
          <p class="msg-txt">扫地机器人</p>
          <span class="msg-txt txtcolored">90金币</span><span class="price">¥99</span>
          </a>
      </li>
      <li class="goods-box">
          <a href="#" class="good-box">
          <span class="discount">特价换购</span>
          <img class="goods-img" src="https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/">
          <p class="msg-txt">电动针灸按摩仪</p>
          <span class="msg-txt txtcolored">180金币</span><span class="price">¥239</span>
          </a>
      </li>
    </ul>
    <div class="fouter-btn">
        <a href="#" class="cxnum">查看更多  ></a>
    </div>
  </div>
</template>
<style scoped>
.main {
  width: 100%;
  height: 305px;
  background: #ffffff;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding-top: 20px;
  box-sizing: border-box;
  margin-top: 20px;
}
.good-box{
    width: 100%;
    height: 100%;
    display: block;
}
.activity-header{
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #333;
}
.line{
    display: inline-block;
    margin: 5px 5px;
    border: 1px solid #333;
    width: 40px;
    height: 0;
    position: relative;
}
.twohead{
    text-align: center;
    font-size: 12px
}
.list-goods{
    display: flex;
    justify-content: space-around;
    padding: 20px 15px 0;
}
.goods-img{
    width: 100%;
}
.goods-box{
    width: 110px;
    height: 170px;
    position: relative;
}
.msg-txt{
    white-space: nowrap;
    font-size: 12px;
}
.txtcolored{
    color: #fe5240;
}
.price{
    font-size: 12px;
    color: #afaeaf;
    margin-left: 5px;
    text-decoration: line-through;
}
.discount{
    font-size: 10px;
    padding: 2px;
    position: absolute;
    display: inline-block;
    background: #333;
    color: #ffffff;
}
.fouter-btn{
    text-align: center;
    margin-top: 10px;
}
.cxnum{
    font-size: 12px;
    display: inline;
    margin: 0 auto;
    color: #999;
}
</style>

