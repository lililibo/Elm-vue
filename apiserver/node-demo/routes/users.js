var express = require('express');
var router = express.Router();
const db = require("../config/db.js");
const usermodel = require("../models/usermodel.js");

//注册http://localhost:3000/users/register
router.get('/register', function (req, res, next) {
  var username = req.query.username;
  var password = req.query.password;
  var phone=req.query.phone;
  //保存数据
  var user = new usermodel({
    username: username,
    password: password,
    phone:phone
  });
  user.save()
    .then(function () {
      console.log("注册成功");
      res.send({
        code: 0,
        msg: "注册成功"
      })
    })
    .catch(function (error) {
      console.log("注册失败");
    })
});
//登陆http://localhost:3000/users/login
router.get("/login", function (req, res, next) {
  var username = req.query.username;
  var password = req.query.password;
  usermodel.findOne({
    username: username
  })
    .then(function (data) {
      console.log(data);
      if (data) {
        console.log("用户名存在");
        if(password==data.password){
          console.log("登陆成功");
          res.send({
            code:0,
            msg:"登陆成功",
            phone:data.phone,
            username:data.username,
            password:data.password
          })
        }else{
          console.log("密码不正确");
          res.send({
            code:-3,
            msg:"密码不正确"
          })
        }
      }else{
        console.log("用户名不存在");
        res.send({
          code:-2,
          msg:"用户名不存在"
        })
      }
    })
    .catch(function (error) {
      console.log("登陆失败", error);
      res.send({
        code: -1,
        msg: "登陆失败"
      });
    });
});

module.exports = router;

