const Note=require('../models/note')

module.exports.list=(req,res)=>{
    Note.find()                     //asynchronous opertion (find)inbuilt method
    .then((notes)=>{                // in mongodb data base if collction is not there it will return empty array
        res.json(notes)
    })   
    .catch((err)=>{
        res.json(err)
    })     
}

module.exports.show=(req,res)=>{
    const id=req.params.id
        Note.findById(id)
        .then((note)=>{
            if(note){
                res.json(note)
            }else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.create=(req,res)=>{
    const body=req.body
        const note=new Note(body)
        note.save()
        .then((note)=>{
            res.json(note)
        })
        .catch((err)=>{
            res.json(err)
        })

}
module.exports.update=(req,res)=>{
    const id=req.params.id
        const body=req.body
        Note.findByIdAndUpdate(id,body,{new:true,runValidators:true})
        .then((note)=>{
            if(note){
                res.json(note)
            }else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })

}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
        Note.findByIdAndDelete(id)
        .then((note)=>{
            console.log('note',note)
            if(note){
                res.json(note)
            }else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })

}
// app.post('/notes',(req,res)=>{
//    
// })
// app.delete('/notes/:id',(req,res)=>{
//    
// })
// app.put('/notes/:id',(req,res)=>{
//    
// })