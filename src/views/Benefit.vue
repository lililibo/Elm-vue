<template>
  <div>
    <van-nav-bar
      title="我的优惠"
      left-text
      right-text="兑换红包"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />


    <!-- 优惠券单元格 -->
    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" v-if="showList == false" @click="showList = true"/>

    <!-- 优惠券列表 -->
      <van-coupon-list v-else position="bottom"
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
  </div>
</template>
<script>
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
}
export default {
   data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false
    }
  },



  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      alert(2);
    },


  onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }


  }
}
</script>

<style>
.van-tabs--line{
  padding-top: 0;
}
</style>
