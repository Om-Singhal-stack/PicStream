let express=require('express')
require('./database/config')
let cors=require('cors')
let User=require('./database/user')
let contact=require('./database/contact')
let app=express()

app.use(express.json())
app.use(cors())
app.post("/register",async(req,resp)=>{
    let user= new User(req.body)
    let result= await user.save()
   result= result.toObject()
   // delete result.password

resp.send(result)
})

app.post("/contacts",async(req,resp)=>{
let contactdata=new contact(req.body)
let con_details=await contactdata.save()
resp.send(con_details)
})

app.post("/login",async(req,resp)=>{
   if(req.body.password && req.body.email){
    let logindata= await User.findOne(req.body).select("-password")
    resp.send(logindata)
   }else{
    resp.send({result:"No user found"})
   }
   

})
app.listen(5000)