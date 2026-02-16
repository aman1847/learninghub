const mongoose=require("mongoose")
const sch=new mongoose.Schema({
    studentid:String,
    studentname:String,
    instructorid:String,
    instructorname:String,
    courseid:String,
    coursename:String,
    coursecategory:String,
    price:String,
    role:String
})
const reg=mongoose.model("enrollments",sch)
module.exports=reg