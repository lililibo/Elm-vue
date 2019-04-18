<template>
  <div>
    <van-nav-bar title="我的地址" left-text left-arrow @click-left="onClickLeft"/>
    <van-address-list v-model="chosenAddressId" add-button-text="新增收货地址" :list="list" @add="onAdd" @edit="onEdit"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },

  methods: {
    onAdd() {
      alert(1);
    },

    onEdit() {
      alert(2);
    },

    onClickLeft() {
      this.$router.go(-1)
    }
  }
};
</script>

<style>
.van-nav-bar{
  background: #009fff;
}
.van-icon-arrow-left{
  color: #fff !important;
}
.van-nav-bar__title{
  color: #fff;
  font-weight: bold;
}
.van-button{
  position: fixed;
  bottom: 0;
}
.van-button--danger{
  background: #fff;
  border: 0.01rem solid #dddddd;
}
.van-button__text{
  color: #009fff;
}
</style>
