const mongoose=require("mongoose")
const connectdb=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/learninghub")
        console.log("Connection Successfull")
    }
    catch(e){
        console.log(e.message)
    }
}
module.exports=connectdb
