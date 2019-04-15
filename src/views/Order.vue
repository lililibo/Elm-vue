<template>
  <div>
    <section class="nodatatipWrap NoDataTip-wrapper_1Gwf0tm">
      <img src="//fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png"/>
      <h3>近三个月无外卖订单记录</h3>
    </section>
    <section class="orderbody">
      <div class="orderbody-bottom"></div>
      <p class="limited">
          查看三个月前的外卖订单<i class="iconfont icon-arrow-down"></i>
      </p>
    </section>
  </div>
</template>

<style>
  body,html{
  width: auto;
  height: auto;
  background-color: #f5f5f5;
}
.nodatatipWrap {
  margin-top: 1rem;
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
  margin: .125rem 0 .1rem;
  color: #6a6a6a;
  font-weight: 400;
  font-size: .17rem;
}
.orderbody{
  padding: 2vw 0;
}
.orderbody .limited{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #999;
}
.orderbody .limited .icon-arrow-down{
  font-size: .01rem;
}
</style>

