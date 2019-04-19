<template>
  <div>
    <div class="Load-wrapper_3h35P-W Load-fixed_1L8WA4k" style="display: none;">
      <div class="Load-loading-main_1LVs9py">
        <div class="Load-loading-icon_2LvpNhI"></div>
      </div>
    </div>
    <div class="username-3qH12">
      <div class="username-3fn_k">
        <input type="text" placeholder="用户名" v-model="newusername">
      </div>
      <div class="username-1oSHV">
        <button type="button" class="username-39myV username-3erKU" @click="changeUname">确认修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      newusername: ""
    };
  },
  methods: {
    changeUname: function() {
      //如果该用户存在于数据库
      if (this.username != "" && this.newusername != "") {
        var _this = this;
        axios
          .post("http://localhost:3000/users/updateUname", {
            username: this.username,
            newusername: this.newusername
          })
          .then(function(res) {
            console.log(res.data);
            if(res.data.code == 0) {
              alert("修改用户名成功");
              localStorage.setItem("username",res.data.username);
              _this.$router.replace("/profile/info"); 
            } else {
              alert(res.data.msg);
            }
          })
          .catch(function(err1) {
            console.log(err1);
          });
      }
    },
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
              } else {
                alert(res.data.msg);
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
    }
  },
  mounted() {
    this.isLogin();
  }
};
</script>

<style>
.Load-wrapper_3h35P-W.Load-fixed_1L8WA4k {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8888;
  width: 100%;
  height: 100%;
}
.Load-loading-main_1LVs9py {
  position: relative;
  margin-top: 1em;
  width: 2em;
  height: 2em;
  font-size: 0.666667rem;
}
.Load-loading-icon_2LvpNhI {
  position: absolute;
  width: 2em;
  height: 2em;
  z-index: 5;
  background: url(//fuss10.elemecdn.com/c/7f/f26d800…png.png) no-repeat;
  background-size: auto 100%;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  background-position-x: 0;
  user-select: none;
  cursor: pointer;
  animation: Load-Gump_19jOdzq 1.5s normal infinite steps(43);
}
.username-3qH12 {
  padding-top: 4vw;
}
.username-3fn_k {
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 0.133333vw solid #eee;
}
.username-3fn_k input {
  font-size: 0.16rem;
  width: 100%;
  height: 11.733333vw;
  border: none;
}
.username-1oSHV {
  padding: 8vw 4vw;
}
.username-2fjrW {
  margin: 2.666667vw 0;
  color: #a9a9a9;
  font-size: 0.12rem;
}
.username-39myV.username-3erKU {
  background-color: #c7c7c7;
}
.username-39myV {
  display: block;
  outline: none;
  color: #fff;
  width: 100%;
  height: 12.8vw;
  font-size: 0.18rem;
  font-weight: 700;
  border-radius: 1.6vw;
  border: none;
  background-color: #00d762 !important;
}
</style>
