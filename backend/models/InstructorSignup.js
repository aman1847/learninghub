const mongoose=require("mongoose")
const sch=new mongoose.Schema({
   name:String,
    email:String,
    password:String,
     role:{type:String, default:"INSTRUCTOR"}
    
})
const reg=mongoose.model("instructor",sch)
module.exports=reg