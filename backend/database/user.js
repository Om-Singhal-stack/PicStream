let mongoose=require('mongoose')

let userschema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

module.exports=mongoose.model("users",userschema)