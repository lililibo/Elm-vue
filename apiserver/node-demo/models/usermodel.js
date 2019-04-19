const db=require("../config/db.js");
const schema=new db.Schema({
    username:String,
    password:String,
    phone:String,
    avator:{
        type:String,
        default:function(){
            return "images/avator.png";
        }
    }
});
module.exports=db.model("user",schema);