const Task = require('../models/Task');
const task=require('../models/Task')

exports.task=async(req,res)=>{
    try{
        const task= await Task.create({
            title:req.body.title,
            description:req.body.description,
            status:req.body.status||'pending',
            user:req.user.id
        })
        res.status(201).send("Task Added Successfully");
    }
catch(error){
    res.status(500).send(error)
}

}

exports.getTask=async(req,res)=>{
    try{
        const tasks=await Task.find({user:req.user.id});
        res.status(200).json(tasks);
    }
    catch(error){
        res.status(500).json(error)
    }
}

    exports.getTaskById=async(req,res)=>{
    try{
        const task=await Task.findOne({
            _id:req.params.id,
            user:req.user.id
        });
        res.json(task);
    }
    catch(error){
        res.status(500).json(error)
    }
}

exports.updateTask=async(req,res)=>{
    const updatetask=await Task.findOneAndUpdate({
         _id:req.params.id,
         user:req.user.id
 },{
    title:req.body.title,
    description:req.body.description,
    status:req.body.status
 },
 {new:true})

 if(!task){
    return res.json({msg:'No task exists'})
 }
res.json(task)
}

exports.deletebyid=async(req,res)=>{
    const deleteid=await task.findOneAndDelete({
          _id:req.params.id,
         user:req.user.id
    })
    res.json(deleteid)
}