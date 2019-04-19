<template>
  <div>
    <div>
      <ul class="main-22cQX">
        <li class="main-3Idiu main-2OSrE">
          <b>头像</b>
          <span class="main-nwHdE">
            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              class="main-1mfZE file"
              @change="changeAvator"
              name="avator"
            >
            <div class="index-18Ili">
              <img :src="avator">
            </div>
            <i class="iconfont icon-right"></i>
          </span>
        </li>
        <router-link to="/profile/info/username" class="main-3Idiu" tag="li">
          <b>用户名</b>
          <span class="main-2cJz_">
            {{username}}
            <i class="iconfont icon-right"></i>
          </span>
        </router-link>
      </ul>
      <h2 class="main-1OkSR">账号绑定</h2>
      <ul class="main-22cQX">
        <li class="main-3Idiu">
          <span>
            <i class="iconfont icon-shouji"></i>
            <b>手机</b>
          </span>
          <span>
            <span class="main-2cJz_">{{phone}}</span>
            <i class="iconfont icon-right"></i>
          </span>
        </li>
      </ul>
      <h2 class="main-1OkSR">安全设置</h2>
      <ul class="main-22cQX">
        <router-link :to="{name:'updatepsw',params:{username:this.username}}" class="main-3Idiu">
          <span>登陆密码</span>
          <span>
            <span class="main-2cJz_" style="color:#0097ff;">修改</span>
            <i class="iconfont icon-right"></i>
          </span>
        </router-link>
      </ul>
      <button class="main-aGw6s" @click="logOut">退出登陆</button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      phone: "",
      avator:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
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
                var phone = localStorage.getItem("phone");
                //隐藏电话号码的中间4位
                var myphone = phone.substr(3, 4);
                var lphone = phone.replace(myphone, "****");
                _this.phone = lphone;
                //如果头像有修改
                if (res.data.avator != "images/avator.png") {
                  _this.avator = "http://localhost:3000/" + res.data.avator;
                }
              } else if (res.data.code == -1) {
                //console.log(res.data.msg);
                _this.username = "";
                _this.phone = "";
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
    //更换头像
    changeAvator: function() {
      //更新数据库
      var formData = new FormData();
      // 主动添加要传给后台的参数
      formData.append("username", this.username);
      formData.append("avator", $(".file").get(0).files[0]);
      var _this = this;
      $.ajax({
        type: "post",
        url: "http://localhost:3000/users/updateAvator",
        // 有文件的data 不能直接如下这样去写，需要使用 FormData
        data: formData,
        processData: false, // 上传文件，需要将这个选项设置为false
        contentType: false, // 上传文件，需要将这个选项设置为false
        success: function(res) {
          console.log(res);
          if (res.code === 0) {
            alert("修改成功");
            _this.avator = "http://localhost:3000/" + res.avator;
          }
        }
      });
    },
    //修改用户名
    changeUname: function() {},
    //退出登陆
    logOut: function() {
      localStorage.removeItem("username");
      localStorage.removeItem("phone");
      localStorage.removeItem("password");
      this.$router.push("/profile");
    },
    //检查头像用户是否修改过
    getAvator: function() {
      if (localStorage) {
        if (localStorage.getItem("avator")) {
          this.avator = localStorage.getItem("avator");
        }
      }
    }
  },
  activated() {
    this.isLogin();
    this.getAvator();
  }
};
</script>


<style>
html,
body {
  background-color: #f5f5f5;
  color: #333;
}
.icon-right {
  color: #ddd;
}
.main-22cQX {
  background-color: #fff;
  width: 100%;
  font-size: 0.16rem;
  color: #333;
}
.main-2OSrE {
  position: relative;
}
.main-3Idiu {
  padding: 2.666667vw 3.733333vw;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-nwHdE {
  display: flex;
  align-items: center;
}
.main-1mfZE {
  display: block;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}
.index-18Ili {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
}
.index-18Ili > img {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-size: 0.6rem;
  overflow: hidden;
}
.main-3Idiu:last-child {
  padding: 3.733333vw;
  border-top: 1px solid #eee;
}
.main-1OkSR {
  margin: 4.266667vw 0 1.866667vw 3.733333vw;
  font-size: 0.12rem;
  color: #999;
  font-weight: 400;
}
.main-3Idiu:last-child {
  padding: 3.733333vw;
  border-top: 1px solid #eee;
}
.main-2cJz_ {
  color: #666;
}
/* 登陆按钮 */
.main-aGw6s {
  display: block;
  width: 100%;
  text-align: center;
  padding: 3.733333vw 0;
  margin: 5.333333vw 0;
  color: #ff5339;
  border: 0;
  border-radius: 0.8vw;
  font-size: 0.16rem;
  font-weight: 700;
  background-color: #fff;
}
</style>