const express = require('express')
const Task = require('../model/task')
const router = new express.Router()

//Get All Tasks
router.get('/tasks', async (req,res) => {
    try{
        const task = await Task.find({})
        res.send(task)
    } catch(e) { res.status(500).send() }
})

//Create Task
router.post('/task', async (req,res) => {
    const task = new Task(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    } catch(e){ res.status(400).send(e) }
})

//Update Task
router.patch('/task/:id',async (req,res) => {
    const name = req.body
    const _id = req.params.id
    if(_id.length !== 24) return res.status(400).send('Id must be 24 characters long')
    try{
        await Task.findByIdAndUpdate(_id,name);
        res.send("Updated Successfully")
    }catch(e){ res.status(500).send(e) }
})

//Delete Task
router.delete('/task/:id', async (req,res) => {
    const _id = req.params.id
    if(_id.length !==24) return res.status(400).send('Id must be 24 characters long')
    try{
        const task = await Task.findByIdAndDelete(_id)
        if(!task) return res.status(404).send()
        res.send("Delete Successfully")
    }catch(e){ res.status(500).send() }
})
    
module.exports=router