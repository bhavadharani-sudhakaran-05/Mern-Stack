const express=require('express')
const router=express.Router();
const {task,getTask,getTaskById,updateTask,deletebyid}=require('../controllers/taskController')
const {protect}=require('../middleware/authmiddleware')
router.post('/task',protect,task)
router.get('/gettask',protect,getTask)
router.get('/gettask/:id',protect,getTaskById)
router.put('/updatetask/:id',protect,updateTask)
router.delete('/deletetask/:id',protect,deletebyid)
module.exports=router