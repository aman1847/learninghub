const mongoose=require("mongoose")
const sch=new mongoose.Schema({
    instructorname:String,
    instructorid:String,
    coursename:String,
    category:String,
    description:String,
    price:String,
     
    
})
const reg=mongoose.model("instructorcourses",sch)
module.exports=reg