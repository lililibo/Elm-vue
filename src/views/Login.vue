<template>
  <div class="App-1EAON">
		<div class="App-3Q8Qb">
			<!--logo-->
			<div class="LoginHeader-1jXn6">
				<img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" />
			</div>
			<!--手机号验证码-->
			<div>
				<form class="MessageLogin-iYvWA">
					<section class="MessageLogin-FsPlX">
						<input type="text" maxlength="11" placeholder="用户名" v-model="username" />
						<!-- <button disabled="disabled" class="CountButton-3e-kd">获取验证码</button> -->
					</section>
					<section class="MessageLogin-FsPlX">
						<input type="password" maxlength="8" placeholder="密码" v-model="password" />
					</section>
					<section class="MessageLogin-15xD9">
						登录表示已同意<a
							href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&key=ruleQue18">《用户服务协议》</a>
					</section>
					<button class="SubmitButton-2wG4T" @click="login">登陆</button>
				</form>
				<a href="#" class="MessageLogin-31EIr">关于我们</a>
        <router-link to="/register" class="newuser">新用户？请注册</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios"
export default {
  name:"login",
  data() {
    return {
      username:'',
      password:'',
      phone:''
    }
  },
  methods: {
    login: function(){
      var _this=this;
      axios.get("http://localhost:3000/users/login",{
        params: {
          username:this.username,
          password:this.password
        }
      }).then(function(res){
        //console.log(res.data);
        if(res.data.code==0){
          alert("登陆成功");
          localStorage.setItem("username",res.data.username);
          localStorage.setItem("phone",res.data.phone);
          _this.$router.go(-1);
        }else if(res.data.code==-2){
          alert("用户名不存在，请重新输入");
        }else if(res.data.code==-3){
          alert("密码不正确，请重新输入");
        }
      }).catch(function(err){
        console.log(err);
      })
    }
  },
}
</script>


<style>
  input,button{
    outline: none;
    border: none;
}

.App-1EAON{
	height: auto;
    min-height: 100%;
    padding-top: .4rem;
}
.App-1EAON .App-3Q8Qb{
    width: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    flex: 1 1 auto;

}
/* logo */
.App-1EAON .App-3Q8Qb .LoginHeader-1jXn6{
    text-align: center;
}
.LoginHeader-1jXn6>img{
    height: .56rem;
}
/* 手机号验证 */
.MessageLogin-iYvWA{
    margin-top: .16rem;
}
.MessageLogin-FsPlX{
    position: relative;
    margin-bottom:.16rem;
    height: .48rem;
    font-size: .14rem;
    background: #fff;
}
.MessageLogin-FsPlX>input {
    width: 100%;
    height: 100%;
    left: 0;
    padding-left: .1rem;
    border: 1px solid #ddd;
    border-radius: .04rem;
    color: #333;
}
.MessageLogin-FsPlX>* {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: .1rem;
    transform: translateY(-50%);
}
.MessageLogin-FsPlX .CountButton-3e-kd{
    color: #ccc;
    padding: 0;
    border-radius: .06rem;
    background: transparent;
    text-align: center;
    font-size: .14rem;
}
/* 用户协议 */
.MessageLogin-iYvWA .MessageLogin-15xD9 {
  margin-top: .12rem;
  color: #999;
  font-size: .14rem;
  line-height: .2rem;
}
.MessageLogin-iYvWA .MessageLogin-15xD9>a{
  color: #2395ff;
}
.MessageLogin-iYvWA .SubmitButton-2wG4T{
  display: block;
  width: 100%;
  height: .42rem;
  margin-top: .3rem;
  border-radius: .04rem;
  background: #4cd96f;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-size: .16rem;
  line-height: .42rem;
}
/* 关于我们 */
.MessageLogin-31EIr{
  display: block;
  margin-top: .2rem;
  text-align: center;
  color: #999;
}
</style>