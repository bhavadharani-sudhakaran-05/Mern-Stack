const jwt=require('jsonwebtoken')
exports.protect=(req,res,next)=>{
    let token=req.headers.authorization
   if(!token||!token.startsWith('Bearer')){
    return  res.status(401).json({msg:"not authorized"})
    }
try{
token=token.split(' ')[1]
const decoded = jwt.verify(token,process.env.JWT_SECRET)
req.user=decoded
next()
}
catch(error){
    res.send("Invalid token");
}
}