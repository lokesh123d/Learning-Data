 const noteModel = require('../models/notes.model.js')


 const createNote =  async (req,res)=>{
   const {title,description} = {...req.body};
 const newnote = await noteModel.create({
    title,
    description
});
res.status(200).json({message:"Note Created Successfully",note:newnote});
}


const  getNotes = async (req,res)=>{
    const allNotes = await noteModel.find();
res.status(200).json({message:"here is a all data ",allNotes:allNotes});
}


const deleteNotes = async (req,res)=>{
    const id = req.params._id;
    const deleteNote = await noteModel.findOneAndDelete({_id:id});
    res.status(200).json({message:"Note Deleted Successfully",delete :deleteNote});
}

const editNotes = async (req,res)=>{
    const {_id,title,description} = req.params;

    const editNotes = await noteModel.findByIdAndUpdate()
}

module.exports = {createNote,getNotes,deleteNotes}