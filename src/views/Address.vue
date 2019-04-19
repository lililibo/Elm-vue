<template>
  <div>
    <van-nav-bar title="我的地址" left-text left-arrow @click-left="onClickLeft"/>
    <van-address-list v-model="chosenAddressId" add-button-text="新增收货地址" :list="list" @add="onAdd" @edit="onEdit"/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      chosenAddressId: "1",
      username:'',
      list:[]
    };
  },

  methods: {
    //获取地址
    getaddressList:function(){
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
                _this.username = res.data.username;
                _this.list=res.data.address;
                //console.log(_this.list)
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
          this.phone = "";
        }
      }
    },
    onAdd() {
      this.$router.push("/profile/address/add");
    },

    onEdit() {
      alert(2);
    },

    onClickLeft() {
      this.$router.push("/profile");
    }
  },
  activated() {
    this.getaddressList();
  },
};
</script>

<style scoped>
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
