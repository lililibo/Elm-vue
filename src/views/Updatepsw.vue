<template>
  <div>
    <section>
      <ul class="changepw-3LrxS">
        <li class="changepw-lCnqr">
          <input type="password" placeholder="旧密码" v-model="psw" class="changepw-3bmr-">
          <!-- <span class="changepw-1OY0R" style="display: none;">密码长度为 6－20 位</span> -->
        </li>
        <li class="changepw-lCnqr">
          <input type="password" placeholder="新密码" v-model="newpsw" class="changepw-3bmr-">
          <!-- <span class="changepw-1OY0R" style="display: none;">密码长度为 6－20 位</span> -->
        </li>
        <li class="changepw-lCnqr">
          <input type="password" placeholder="确认密码" v-model="qrpsw" class="changepw-3bmr-">
          <!-- <span class="changepw-1OY0R" style="display: none;">两次密码输入不一致</span> -->
        </li>
      </ul>
      <button type="button" @click="changePsw" class="changepw-1GfOJ">确认并保存</button>
    </section>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      psw: "",
      newpsw: "",
      qrpsw: "",
      username: ""
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
    //修改密码
    changePsw: function() {
      if (this.psw && this.newpsw && this.qrpsw) {
        var _this=this;
        //验证旧密码
        axios.post("http://localhost:3000/users/checkpsw",{
          username:this.username,
          psw:this.psw
        }).then(function(res){
          if(res.data.code==0){//旧密码是匹配的
            if(_this.newpsw!=_this.qrpsw){
              alert("两次输入密码不一致");
            }else{
              //修改数据
              axios.post("http://localhost:3000/users/changepsw",{
                username:_this.username,
                password:_this.newpsw
              }).then(function(res){
                console.log(res.data);
                if(res.data.code==0){
                  alert("修改密码成功");
                  _this.$router.push("/profile/info");
                }else{
                  alert(res.data.msg);
                }
              }).catch(function(err){
                console.log(err);
              })
            }
          }else{
            alert(res.data.msg);
          }
        }).catch(function(err){
          console.log(err);
        })
      } else {
        alert("密码不能为空");
      }
    }
  },
  activated() {
    this.isLogin();
  }
};
</script>


<style>
.changepw-3LrxS {
  background-color: #fff;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  width: 100%;
  padding: 2.666667vw 2.666667vw 0;
}
.changepw-lCnqr {
  margin-bottom: 2.666667vw;
}
.changepw-3bmr- {
  display: block;
  margin-bottom: 1.333333vw;
  width: 100%;
  padding: 2.133333vw 1.066667vw;
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 0.266667vw;
}
.changepw-1GfOJ {
  display: block;
  text-align: center;
  padding: 2.933333vw 0;
  margin: 4vw auto;
  color: #fff;
  border-radius: 0.8vw;
  font-size: 0.2rem;
  font-weight: 800;
  background-color: #3199e8;
  width: 95%;
  border: none;
}
</style>

