const mongoose=require("mongoose");


const notesSchema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    }
})



const noteModel=mongoose.model('notes',notesSchema);

module.exports=noteModel;