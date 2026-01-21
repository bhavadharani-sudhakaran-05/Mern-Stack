const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/User')
exports.register=async(req,res)=>{
    const {name,email,password}=req.body;
    const existing=await User.findOne({email})
    if(existing){
       return res.status(400).send({message:"User already exists"})
} const hashedPassword=await bcrypt.hash(password,10); 
  const user=await User.create({
name,
email,
password:hashedPassword
})
 res.status(201).send({message:"User registered successfully"})
}
exports.login=async(req,res)=>
{
    try{
    const {email,password}=req.body;
    const existingUser=await User.findOne({email});
    if(!existingUser)
    {
         res.status(400).send({message:"email not registered"})
        
    }
    const isMatching=await bcrypt.compare(password,existingUser.password);
    if(!isMatching)
    {
         res.status(400).send({message:"invalid credentials"})
      
    }
    const token=jwt.sign({id:existingUser._id},process.env.JWT_SECRET,{expiresIn:'1d'});

    //res.status(200).send({message:"login successful"})
    res.json({token:{token}})
    } 
    catch(error)
    {
      res.status(500).send(error)
        }
}