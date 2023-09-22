const Task = require('../models/Task')

const taskCtlr={}

taskCtlr.extract = async(req,res) =>{
    try{
        const {id} = req.params
        const task = await Task.findById(id)
        res.json(task)
    }catch(e){
         res.json(e)
    }
}

taskCtlr.update = async(req,res)=>{
    try{
        const body = req.body
        const task = new Task(body)
        const value =await task.save()
        res.json(value)
    }catch(e){
        res.json(e)
    }
}


module.exports = taskCtlr