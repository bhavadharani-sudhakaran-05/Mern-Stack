const Task=require('../models/Task')
exports.createTask=async(req,res)=>{
    try {
const {title,description,status,user} = req.body;
const existingTask=await Task.findOne({title})
if(existingTask)
{
    return res.status(400).send({message:"Task is already exists"})
}
const task=await Task.create({
    title,
    description,
    status,
    user
})
res.status(201).send({message:"Task created successfully"})
}
catch(error)
{
    res.status(500).send({error})
}}