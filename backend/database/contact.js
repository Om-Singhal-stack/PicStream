let mongoose=require('mongoose')

let userschema=new mongoose.Schema({
    name:String,
    email:String,
    message:String
})

module.exports=mongoose.model("contacts",userschema)