const mongoose=require("mongoose")
const sch=new mongoose.Schema({
   name:String,
    email:String,
    password:String,
     role:String
    
})
const reg=mongoose.model("student",sch)
module.exports=reg


