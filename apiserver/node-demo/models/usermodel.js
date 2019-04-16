const db=require("../config/db.js");
const schema=new db.Schema({
    username:String,
    password:String,
    phone:String
});
module.exports=db.model("user",schema);