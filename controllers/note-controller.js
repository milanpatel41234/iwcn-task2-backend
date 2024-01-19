const Note = require('../modals/note-modal');

// add note
const addNote = async (req,res)=>{
    const { note } = req.body;
  try{
  const result = await Note.create({message:note})
  res.status(201).json({success:true, message:'note is successfully created', data:result })
  }catch(error){
   res.status(500).json({message:'sorry! unable to create note', error:error.message})
  }
}

//get note
const getNote = async (req,res)=>{
    try{
  const response = await Note.findAll();
   res.status(200).json({success:true, message:'note is successfully fetched', data:response })
    }catch(error){
          res.status(500).json({message:'sorry! unable to fetch data', error:error.message})
    }
}

//delete note
const deleteNote = async (req,res) =>{
    const { id } = req.params
     try{
       await Note.destroy({where:{id:id}});
       res.status(202).json({message:'successfully deleted'})
  }catch(error){
       res.status(500).json({message:'sorry! unable to delete', error:error.message})
  }
}

module.exports= { addNote, getNote, deleteNote };