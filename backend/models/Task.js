const mongoose=require('mongoose');
const taskSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },description:{
        type:String,
        required:true
    },status:{
        type:String,
          default:'pending'
    },user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
        }

})
module.exports=mongoose.model('Task',taskSchema);