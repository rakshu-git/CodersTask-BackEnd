const mongoose = require ('mongoose')

const {Schema} = mongoose

const taskSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    nominee:{
        type:String,
        enum:['father','mother','son'],
        required:true
    },
    adhaar:{
        type:Number,
        required:true,
        minlength:12,
        maxlength:12
    }
})
const Task= mongoose.model('Task',taskSchema)

module.exports = Task