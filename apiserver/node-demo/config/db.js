
const mongoose=require("mongoose");
const url="mongodb://localhost:27017/elemo";
mongoose.connect(url,{useNewUrlParser:true})
    .then(function(){
        console.log("连接数据库成功");
    })
    .catch(function(){
        console.log("连接数据库失败");
    });
module.exports=mongoose;