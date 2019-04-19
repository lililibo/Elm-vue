var express = require('express');
var router = express.Router();
const db = require("../config/db.js");
const usermodel = require("../models/usermodel.js");
const path = require("path");
const fs = require("fs");
const multer = require('multer');
const upload = multer({ dest: 'c:/tmp' });

//注册http://localhost:3000/users/register
router.get('/register', function (req, res, next) {
  var username = req.query.username;
  var password = req.query.password;
  var phone = req.query.phone;
  //用户名唯一验证
  usermodel.findOne({
    username: username
  }).then(function (data) {
    console.log(data);
    if (data) {
      console.log("用户名已经存在");
      res.send({
        code: -3,
        msg: "用户名已经存在"
      })
    } else {
      //保存数据
      var user = new usermodel({
        username: username,
        password: password,
        phone: phone
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
    }
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
        if (password == data.password) {
          console.log("登陆成功");
          res.send({
            code: 0,
            msg: "登陆成功",
            phone: data.phone,
            username: data.username,
            password: data.password
          })
        } else {
          console.log("密码不正确");
          res.send({
            code: -3,
            msg: "密码不正确"
          })
        }
      } else {
        console.log("用户名不存在");
        res.send({
          code: -2,
          msg: "用户名不存在"
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

//对localStorage的username进行验证http://localhost:3000/users/usernameyz
router.get("/usernameyz", function (req, res, next) {
  var username = req.query.username;
  usermodel.findOne({
    username: username
  })
    .then(function (data) {
      //console.log(data);
      if (data) {
        console.log("用户名存在");
        res.send({
          code: 0,
          msg: "用户名存在",
          avator:data.avator,
          username:data.username,
          phone:data.phone,
          address:data.address
        })
      } else {
        console.log("用户名不存在");
        res.send({
          code: -1,
          msg: "用户名不存在"
        })
      }
    })
    .catch(function (error) {
      console.log(error);
      res.send({
        code: -2,
        msg: "校验用户名失败"
      });
    });
});


//修改用户头像http://localhost:3000/users/updateAvator
router.post("/updateAvator", upload.single("avator"), function (req, res, next) {
  //先找到用户
  //console.log(req.body.username);
  const newFileName = new Date().getTime() + '_' + req.file.originalname;
  const newFilePath = path.resolve(__dirname, '../public/', newFileName);
  const fileData = fs.readFileSync(req.file.path);
  fs.writeFileSync(newFilePath, fileData);
  //找到用户
  usermodel.findOne({
    username: req.body.username
  }).then(function (finddata) {
    console.log(finddata);
    // 修改数据库
    usermodel.updateOne({
      username: req.body.username
    }, {
        avator: newFileName,
      }).then(data => {
        //console.log(newFileName);
        if (data.nModified == 1) {
          res.send({
            code: 0,
            msg: '上传成功',
            avator: newFileName
          });
        }
      }).catch(err => {
        console.log(err)
      })
  }).catch(function (err) {
    console.log(err);
  })
});

//修改用户名http://localhost:3000/users/updateUname
router.post("/updateUname", function (req, res, next) {
  //console.log(req.body);
  //新用户名要不存在
  usermodel.findOne({
    username: req.body.newusername
  }).then(function (data) {
    //console.log(data);
    if (!data) {
      //更新数据库
      usermodel.updateOne({
        username: req.body.username
      }, {
          username: req.body.newusername
        }).then(function (data) {
          if(data.nModified==1){
            console.log("修改用户名成功")
            res.send({
              code:0,
              username:req.body.newusername,
              msg:"修改用户名成功"
            })
          }
        }).catch(function (err) {
          console.log(err);
        })
    } else {
      res.send({
        code: -1,
        msg: "用户名已存在"
      })
    }
  }).catch(function (err) {
    console.log(err);
  })
})
//增加地址http://localhost:3000/users/addaddress
router.post("/addaddress",function(req,res,next){
  console.log(req.body);
  usermodel.findOne({
    username:req.body.username
  }).then(function(data){
    console.log(data);
    if(data){
      usermodel.updateOne({
        username:req.body.username
      },{
        address:req.body.list
      }).then(function(data1){
        console.log(data1);
        if(data1.nModified==1){
          res.send({
            code:0,
            msg:"地址添加成功"
          })
        }
      }).catch(function(errs){
        console.log(errs);
      })
    }
  }).catch(function(err){
    console.log(err);
  })
})


module.exports = router;

