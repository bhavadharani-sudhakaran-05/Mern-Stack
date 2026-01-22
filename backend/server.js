const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config();
app.use(express.json());
app.use('/auth',require('./routes/authRoutes'))
app.use('/task',require('./routes/taskRoutes'))
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("Mongodb connected")}).catch((err)=>{console.log("error occur")});
app.get('/api',(req,res)=>{res.send("express");});
app.post('/api',(req,res)=>{
    const temp=req.body;
    res.json(temp);
})
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
