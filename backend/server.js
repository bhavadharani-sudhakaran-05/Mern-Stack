const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("mongodb connected successfully")}).catch((err)=>{console.log(err)});
app.use(express.json());
app.use('/auth',require('./routes/authRoutes'));
app.use('/task',require('./routes/taskRoutes'));
app.get('/api', (req, res) => {
  res.send('Hello World!');
});
app.post('/api',(req,res)=>{
  const temp=req.body;
  res.send(temp);
})
app.listen(4000,()=>{console.log('Server is running on port 4000');});